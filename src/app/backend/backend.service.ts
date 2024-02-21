import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  public post(userData: any):Observable<any> {
    const route: string = 'https://localhost:7191/cadastro';
    return this.http.post(route, userData, {
    });
  }
}
