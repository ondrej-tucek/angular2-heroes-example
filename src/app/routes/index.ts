import { provideRouter, RouterConfig } from '@angular/router';

import { HomeViewComponent } from '../views/home';
import { DashboardViewComponent } from '../views/dashboard';
// import { AboutViewComponent } from '../views/about';


export const routes: RouterConfig = [
    {path: '', component: HomeViewComponent},
    {path: 'home', component: HomeViewComponent},
    {path: 'dashboard', component: DashboardViewComponent},
    // {path: 'about', component: AboutViewComponent},
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    // { path: 'about', loader: () => require('es6-promise!../views/about')('AboutViewComponent')
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

