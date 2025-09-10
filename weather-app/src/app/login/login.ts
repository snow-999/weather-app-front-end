import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';


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
      userEmail: ['', Validators.required],
      userPassword: ['']
    })
  }



  login() {
    console.log(this.userForm.valid);

    if (this.userForm.valid) {
      this.userService.login(this.userForm.value).subscribe
    }
  }

  dontHaveEmail() {
    this.router.navigate(['signup']);
  }
}
