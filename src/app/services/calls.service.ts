import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallsService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getCalls(): Observable<any> {
    return this.http.get(`${environment.apiUrl}records/`);
  }
}
