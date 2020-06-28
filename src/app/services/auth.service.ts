import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient;

  constructor(httpHandler: HttpBackend) {
    this.http = new HttpClient(httpHandler);
  }

  public login(username: string, password: string): Observable<{ accessToken: string }> {
    return this.http.post(`${environment.apiUrl}login/`, {
      email: username,
      password
    }) as Observable<{ accessToken: string }>;
  }
}
