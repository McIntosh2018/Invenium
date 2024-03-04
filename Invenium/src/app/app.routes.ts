import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Events', component: EventsComponent},
    {path: 'Contact', component: ContactComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];
