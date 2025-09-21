import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { navItems } from '../../navBarItems';
import { NavService } from '../../services/nav-service';


@Component({
  selector: 'app-navbar-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-list.html',
  styleUrl: './navbar-list.css'
})
export class NavbarList {
  navItems = navItems
  logOutButtom: boolean = false

  constructor(private cookieService: CookieService, private navService: NavService, private router: Router) { }
  showLogOut() {
    this.logOutButtom = !this.logOutButtom
  }

  logOut() {
    this.cookieService.delete("JWT_TOKEN")
    this.navService.toggleFunc("Profile")
    this.navService.toggleFunc("Signup")
    this.navService.toggleFunc("Login")
    this.router.navigate([""])
  }
}
