import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Media', component: MediaComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];
