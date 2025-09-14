import { inject, Injectable } from '@angular/core';
import { Router } from 'express';
import { CookieService } from 'ngx-cookie-service';
import { NavItem } from '../models/navItemModel';

@Injectable({
  providedIn: 'root'
})
export class NavService {


  constructor(private cookieService: CookieService, private router: Router) { }



  ifLogedIn() {
    const token = this.cookieService.get('JWT_TOKEN');
    if (token) {

    }
  }

  setShowFalse(navItem: NavItem) {
    navItem.show = false
  }


}
