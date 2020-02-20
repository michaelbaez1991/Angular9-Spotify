import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Modelo/Users';

@Injectable({
  providedIn: 'root'
})
export class CrudJavaService {
  constructor(private http: HttpClient) {  }

  url = 'http://localhost:8080/backend/globalTech';

  getUsers() {
    return this.http.get<Users[]>(this.url);
  }
}
