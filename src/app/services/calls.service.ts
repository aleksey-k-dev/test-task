import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { Call } from '../interfaces/call.interface';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallsService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getCalls(): Observable<Call[]> {
    return this.http.get(`${environment.apiUrl}records/`) as Observable<Call[]>;
  }

  public getCall(id: number): Observable<Call> {
    return this.http.get(`${environment.apiUrl}records/`).pipe(
      map((calls: Call[]) => calls.find((call) => call.id === id) || null),
      switchMap((call) => call !== null
        ? of(call)
        : throwError('Call does not exist')
      )
    );
  }

  public updateCall(id: number, call: Call): Observable<Call> {
    return this.http.put(`${environment.apiUrl}records/${id}/`, call) as Observable<Call>;
  }
}
