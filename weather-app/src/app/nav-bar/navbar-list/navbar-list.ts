import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../models/navItemModel';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-list.html',
  styleUrl: './navbar-list.css'
})
export class NavbarList {
  @Input() navList: NavItem[] = [];
  logOutButtom: boolean = false

  showLogOut() {
    this.logOutButtom = !this.logOutButtom
  }
}
