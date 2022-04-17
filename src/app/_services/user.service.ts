import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(environment.AUTH_API + 'students');
  }

  getStudent(id: string): Observable<any> {
    return this.http.get(`${environment.AUTH_API}students/${id}`);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${environment.AUTH_API}students/${id}`);
  }

}
