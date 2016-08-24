/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  providers: [ ],
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
