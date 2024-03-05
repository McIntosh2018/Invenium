import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  navItems= [
    { name: 'Home', route:'/Home'},
    { name: 'About', route:'/About'},
    // { name: 'Media', route:'/Media'},
  ]
}
