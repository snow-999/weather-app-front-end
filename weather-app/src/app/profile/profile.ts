import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/userModel';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  constructor(private userService: UserService) { }

  user: User | undefined
  ngOnInit() {
    this.getMyUser()
  }




  getMyUser() {
    this.userService.getUser().subscribe(data => {
      this.user = data
    })
  }
}
