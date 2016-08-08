import { Component, OnInit } from '@angular/core';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'dashboard-view',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('../templates/dashboard.html')
})
export class DashboardViewComponent implements OnInit {
  // Set our default values
  localState = { value: '' };




  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.localState.value = '';
  }

}



