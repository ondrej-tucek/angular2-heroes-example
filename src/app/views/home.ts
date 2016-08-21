import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import { Hero } from '../components/hero';
import { HeroDetailComponent } from '../components/hero-detail';
import { HeroService } from '../services/hero';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home-view',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ HeroService
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [ HeroDetailComponent,
                MD_GRID_LIST_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('../templates/home.html')
})
export class HomeViewComponent implements OnInit {
  // Set our default values
  localState = { value: '' };

//   title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

// TypeScript public modifiers
    constructor(private router: Router,
                private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    ngOnInit() {
        console.log('hello `Home` component');
        this.getHeroes();
        // this.title.getData().subscribe(data => this.data = data);
    }

    submitState(value) {
        console.log('submitState', value);
        this.localState.value = '';
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}



