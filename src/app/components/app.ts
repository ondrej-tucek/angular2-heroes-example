/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { BrowserModule }  from '@angular/platform-browser';
// import { FormsModule }    from '@angular/forms';
// import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import { XHRBackend } from '@angular/http';

// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './in-memory-data.service';

// import { MdToolbar } from '@angular2-material/toolbar';

// import { HomeViewComponent } from '../views/home';
import { DashboardViewComponent } from '../views/dashboard';
import { FriendsViewComponent } from '../views/friends';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'iod-app',
  pipes: [ ],
  providers: [
    // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
   ],
  directives: [ DashboardViewComponent, FriendsViewComponent ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <md-content>
        <md-toolbar style="background-color: DeepSkyBlue;">

            <!--<span routerLinkActive="active">
            <a routerLink="/home">
                Home
            </a>
            </span>-->

            <a md-button [routerLink]=" ['/home'] ">
                Home
            </a>
            <a md-button [routerLink]=" ['/dashboard'] ">
                Dashboard
            </a>
            <a md-button [routerLink]=" ['/friends'] ">
                Friends
            </a>
            <a md-button [routerLink]=" ['/about'] ">
                About
            </a>

        </md-toolbar>

        <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>
        <router-outlet></router-outlet>
    </md-content>
  `
})
export class AppComponent implements OnInit {
  loading = false;
  name = 'learning';

  constructor() {

  }

  ngOnInit() {
    console.log('Initial App ...');
  }

}
