import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: require('../templates/hero-detail.html')
})

export class HeroDetailComponent {

    @Input() hero: Hero;
}
