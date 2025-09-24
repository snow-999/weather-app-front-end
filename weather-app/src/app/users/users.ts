import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

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

  makeNewAdmin(userId: number) {
    const role: string = "ADMIN"
    this.userService.addNewAdmin(userId, role).subscribe({
      next: () => {
        Swal.fire({
          title: "succes",
          text: "succesfully add new admin",
          icon: "success",
          confirmButtonText: "ok"
        })
        this.getAllUsers()
      }
    })
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        Swal.fire({
          title: "succes",
          text: "succesfully deleted admin",
          icon: "success",
          confirmButtonText: "ok"
        })
        this.getAllUsers()
      }
    })
  }

  // this.users = data 
}