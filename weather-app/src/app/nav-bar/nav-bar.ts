import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarList } from "./navbar-list/navbar-list";
import { NavItem } from '../models/navItemModel';
import { CookieService } from 'ngx-cookie-service';
import { Router } from 'express';





@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet, RouterLink, NgClass, NavbarList],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  constructor(private cookieService: CookieService) { }

  showMiniMenu = false

  navBarList: NavItem[] = [
    {
      title: "Home",
      routerLink: "home",
      class: "nav-link",
      show: true
    },
    {
      title: "Profile",
      routerLink: "profile",
      class: "nav-link",
      show: true
    },
    {
      title: "Login",
      routerLink: "",
      class: "nav-link",
      show: true
    },
    {
      title: "Signup",
      routerLink: "signup",
      class: "nav-link",
      show: true
    }
  ]

  ngOnInit() {
    this.ifLogedIn()
  }

  ifLogedIn() {
    const token = this.cookieService.get('JWT_TOKEN');
    if (token) {
      this.setShowFalse("Login")
      this.setShowFalse("Profile")
      this.setShowFalse("Signup")
    }
  }

  setShowFalse(title: string) {
    const item = this.navBarList.find(nav => nav.title === title);
    if (item) {
      item.show = false;
    }
  }

  showMiniNav() {
    if (this.showMiniMenu) {
      this.showMiniMenu = false;
    } else {
      this.showMiniMenu = true;
    }
  }
}
