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

  postUsers(user: Users) {
    return this.http.post<Users[]>(this.url, user);
  }

  getUsersId(id: number) {
    return this.http.get<Users>(this.url + '/' + id);
  }

  updateUsers(user: Users) {
    return this.http.put<Users>(this.url + '/' + user.id, user);
  }

  deleteUsers(user: Users){
    return this.http.delete<Users>(this.url  + '/' + user.id);
  }
}
