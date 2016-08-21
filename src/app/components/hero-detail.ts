import { Component, Input, OnInit } from '@angular/core';
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
    // hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let v = 'id';
            let id = +params[v];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
        // window.location.href = '/dashboard';
    }
}
