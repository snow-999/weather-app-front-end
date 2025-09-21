import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/userModel';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(user: User) {
    this.http.post('http://localhost:8080/api/v1/login', user, { withCredentials: true }).subscribe({
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


  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (e) {
      console.error('Failed to decode token', e);
      return null;
    }
  }

  getUserEmail() {
    const token = this.cookieService.get('JWT_TOKEN');
    const decoded = this.decodeToken(token);
    return decoded?.userEmail;
  }

  getUser() {
    const email = this.getUserEmail()
    return this.http.get<User>(`http://localhost:8080/api/v1/get-email/${email}`, { withCredentials: true })
  }

  updateUserData(userId: Number, user: User) {
    return this.http.put<User>(`http://localhost:8080/api/v1/update-user/${userId}`, user, { withCredentials: true })
  }

}
