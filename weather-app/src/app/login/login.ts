import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userForm: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }



  login() {
    const user: User = this.userForm.value
    console.log(user);


    if (this.userForm.valid) {
      this.userService.login(user)
    }
  }

  dontHaveEmail() {
    this.router.navigate(['signup']);
  }
}
