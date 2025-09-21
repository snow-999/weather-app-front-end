import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarList } from "./navbar-list/navbar-list";





@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet, RouterLink, NgClass, NavbarList],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {


  showMiniMenu = false

  // ask ayat about this part (could i make it static but i prefer dynamic)



  showMiniNav() {
    if (this.showMiniMenu) {
      this.showMiniMenu = false;
    } else {
      this.showMiniMenu = true;
    }
  }
}
