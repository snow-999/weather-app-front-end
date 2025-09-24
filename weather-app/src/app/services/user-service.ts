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
    return this.http.post('http://localhost:8080/api/v1/login', user, { withCredentials: true })
  }

  createUser(user: User) {
    this.http.post('http://localhost:8080/api/v1/signup', user, { withCredentials: true }).subscribe(data => {
      console.log(data);

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
  hasRole(role: string): boolean {
    const token = this.cookieService.get('JWT_TOKEN')
    if (!token) return false;


    try {
      const decoded = this.decodeToken(token)

      if (decoded.roles) {
        return decoded.roles.includes(role);
      }
      if (decoded.role) {
        return decoded.role === role;
      }

      return false;
    } catch (e) {
      console.error('Invalid token', e);
      return false;
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

  getAllUsers() {
    return this.http.get<User[]>(`http://localhost:8080/api/v1/get-all-users`, { withCredentials: true })
  }

  deleteUser(userId: number) {
    return this.http.delete(`http://localhost:8080/api/v1/delete-user/${userId}`, { withCredentials: true })
  }

  addNewAdmin(userId: number, roleName: string) {

    return this.http.put(`http://localhost:8080/api/v1/add-new-admin/${userId}?roleName=${roleName}`, {}, { withCredentials: true })
  }

}
