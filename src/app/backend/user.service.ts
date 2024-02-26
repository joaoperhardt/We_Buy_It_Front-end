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

  public post(userData: any):Observable<any> {
    const route: string = 'https://localhost:7191/anuncio';
    return this.http.post(route, userData, {
      headers: {
        
      }
    });
  }
  public postcadastrousuario(userData: any):Observable<any> {
    const route: string = 'https://localhost:7191/cadastro';
    return this.http.post(route, userData, {
    });
    
  }
    public postcadastroloja(userData: any):Observable<any> {
      const route: string = 'https://localhost:7191/store';
      return this.http.post(route, userData, {
      });
  }
  private baseUrl = 'https://localhost:7191';

getUsuarioInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/store`);
}
}
