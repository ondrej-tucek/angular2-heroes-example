import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from '../services/hero';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    providers: [ HeroService ],
    template: require('../templates/hero-detail.html')
})

export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let k = 'id';
            if (params[k] !== undefined) {
                let id = +params[k];
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    save(): void {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedHero: Hero = undefined): void {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }
}
