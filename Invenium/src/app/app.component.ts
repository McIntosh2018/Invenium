import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterBarComponent } from "./footer-bar/footer-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutComponent, RouterLink, RouterLinkActive, NavBarComponent, FooterBarComponent]
})
export class AppComponent {
  constructor() {
    console.log(environment.production);
  }

  title = 'Invenium';
}
