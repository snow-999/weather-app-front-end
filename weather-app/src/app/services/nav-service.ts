import { Injectable } from '@angular/core';

import { NavItem } from '../models/navItemModel';
import { navItems } from '../navBarItems';

@Injectable({
  providedIn: 'root'
})
export class NavService {


  navBarItems = navItems
  toggleFunc(title: string) {
    const item = this.navBarItems.find(nav => nav.title === title);
    if (item) {
      item.show = !item.show;
    }
  }


}
