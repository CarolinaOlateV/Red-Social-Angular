import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registry', component: RegistryComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);