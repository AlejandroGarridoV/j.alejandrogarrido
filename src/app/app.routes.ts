import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ObrasComponent } from './pages/obras/obras.component';

export const routes: Routes = [      
    { path: '', component: HomeComponent },
    { path: 'obras', component: ObrasComponent }, 
];
