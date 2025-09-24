import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { NavService } from '../services/nav-service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private navService: NavService) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]]
    })
  }



  login() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value
      this.userService.login(user).subscribe({
        next: () => {
          if (this.userService.hasRole("SUPER_ADMIN")) {
            console.log("role accepted");
            this.navService.toggleFunc("Users")
          }
        }
      })


      this.navService.toggleFunc("Login")
      this.navService.toggleFunc("Signup")
      this.navService.toggleFunc("Logout")
      this.navService.toggleFunc("Profile")
      this.router.navigate(["home"])
      Swal.fire({
        title: "succes",
        text: "log in seccesfully",
        icon: "success",
        confirmButtonText: "ok"
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid Email and Password',
        icon: 'error',
        confirmButtonText: 'click'
      })
    }
  }

  dontHaveEmail() {
    this.router.navigate(['signup']);
  }
}
