import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getByIdUser(id: string):Observable<any> {
    const route: string = `https://localhost:7191/user/${id}`;
    return this.http.get(route, {
      
    });
  }

  public update(userData: any):Observable<any> {
    const route:string = 'https://localhost:7191/user';
    return this.http.put(route, userData, {
      
    });
  }
}
