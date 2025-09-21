import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  constructor(private userService: UserService) { }

  users: User[] = []

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data
    })
  }

  // this.users = data 
}
