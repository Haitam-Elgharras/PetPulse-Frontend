import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8084';

  register(value: any):Observable<any> {
    let user = {
      email: value.email,
      password: value.password,
      firstName: value.firstName,
      lastName: value.lastName
    }
    console.log(user);
    return this.http.post<any>(this.baseUrl + '/auth/register', user);
  }
}
