import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  login(user: User) {
    this.http.post('http://localhost:8080/api/v1/login', user).subscribe({
      next(value) {
        console.log(value)
      }
    })
  }

  createUser(user: User) {
    this.http.post('http://localhost:8080/api/v1/signup', user).subscribe({
      next(value) {
        console.log(value);
      },
    })
  }

}
