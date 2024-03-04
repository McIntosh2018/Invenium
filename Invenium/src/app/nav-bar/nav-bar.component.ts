import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, EventsComponent, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
