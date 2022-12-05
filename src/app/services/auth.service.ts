import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/users`, data);
  }

  loginUser(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.url}/auth/login`, data);
  }
}
