import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public login(userData: any): Observable<any> {
    const route = 'https://localhost:7191/user/login';
    return this.http.post(route, userData);

  }
}