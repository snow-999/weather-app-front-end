import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/userModel';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-edite-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edite-form.html',
  styleUrl: './edite-form.css'
})
export class EditeForm {

  @Input() user?: User
  @Output() isUpdated = new EventEmitter(false)

  userForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: [''],
      phoneNumber: ['']
    })
  }


  ngOnInit() {
    this.userForm.patchValue({
      name: this.user?.name,
      phoneNumber: this.user?.phoneNumber
    })
  }

  updateUserData() {
    if (this.userForm.valid) { }
    const updatedUser: User = {
      name: this.userForm.get("name")?.value,
      phoneNumber: this.userForm.get("phoneNumber")?.value,
      email: this.user!.email,
      pass: this.user!.pass
    }
    if (this.user?.id) {
      this.userService.updateUserData(this.user?.id, updatedUser).subscribe(() => {
        this.isUpdated.emit(true)
      })
    }
  }

}
