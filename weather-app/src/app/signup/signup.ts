import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  userForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^(010|011|012|015)[0-9]{8}$")]],
      name: ['', [Validators.required]]
    })
  }


  createUser() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value
      user.role = "USER"
      console.log(user);

      this.userService.createUser(user)
      this.router.navigate([""])
    } else {

      Swal.fire({
        title: 'Error!',
        text: 'Invalid Email and Password',
        icon: 'error',
        confirmButtonText: 'click'
      })
    }

  }
}
