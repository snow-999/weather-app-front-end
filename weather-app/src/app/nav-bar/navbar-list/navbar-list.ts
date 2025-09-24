import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { navItems } from '../../navBarItems';
import { NavService } from '../../services/nav-service';
import { UserService } from '../../services/user-service';
import { NavItem } from '../../models/navItemModel';


@Component({
  selector: 'app-navbar-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-list.html',
  styleUrl: './navbar-list.css'
})
export class NavbarList {

  constructor(private cookieService: CookieService, private navService: NavService, private router: Router, private userServices: UserService) { }

  navItems: NavItem[] = navItems

  logOut() {
    if (this.userServices.hasRole("SUPER_ADMIN")) {
      this.navService.toggleFunc("Users")
    }
    this.navService.toggleFunc("Profile")
    this.navService.toggleFunc("Signup")
    this.navService.toggleFunc("Login")
    this.navService.toggleFunc("Logout")
    this.cookieService.delete("JWT_TOKEN")
    this.router.navigate([""])
  }
}
