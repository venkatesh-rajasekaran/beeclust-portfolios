import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'home-carousel',
    templateUrl: './home-carousel.component.html',
    styleUrls: ['../../assets/styles/common.style.css', '../../assets/styles/home-carousel.style.css'],
    providers: [NgbCarouselConfig]
})

export class HomeCarouselComponent {
    constructor(
        private router: Router,
        private carouselConfig: NgbCarouselConfig) {
            this.carouselConfig.interval = 5000;
            this.carouselConfig.keyboard = true;
            this.carouselConfig.pauseOnHover = true;
    }

    ngOnInit() {
        window.scrollTo(0,0);
    }
}
