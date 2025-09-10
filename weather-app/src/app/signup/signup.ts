import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';
import { log } from 'console';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  userForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required, Validators.min(8), Validators.max(16)],
      phoneNumber: ['', Validators.required],
      name: ['', Validators.required]
    })
  }


  createUser() {
    const user: User = this.userForm.value
    console.log(user);
    this.userService.createUser(user)
    console.log("user Created");
  }

}
