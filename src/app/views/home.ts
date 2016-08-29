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
  providers: [
      HeroService
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
      HeroDetailComponent,
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
  addingHero = false;
  error: any;

// TypeScript public modifiers
    constructor(private router: Router,
                private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error);
    }

    addHero(): void {
        this.addingHero = true;
        this.selectedHero = undefined;
        // this.gotoDetail();
    }

    close(savedHero: Hero): void {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = undefined; }
            })
            .catch(error => this.error = error);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
