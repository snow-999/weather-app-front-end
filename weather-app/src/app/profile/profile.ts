import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';
import { EditeForm } from "./edite-form/edite-form";

@Component({
  selector: 'app-profile',
  imports: [EditeForm],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  constructor(private userService: UserService) { }

  user: User | undefined
  ngOnInit() {
    this.getMyUser()
  }


  showEditForm: boolean = false

  toggelEditForm() {
    this.showEditForm = !this.showEditForm;
  }

  getMyUser() {
    this.userService.getUser().subscribe(data => {

      this.user = data
      console.log(this.user);
    })
  }

  isUserUpdated() {
    this.getMyUser()
  }
}
