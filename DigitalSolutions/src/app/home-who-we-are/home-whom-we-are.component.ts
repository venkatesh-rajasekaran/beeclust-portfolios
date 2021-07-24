import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-who-we-are',
    templateUrl: './home-who-we-are.component.html',
    styleUrls: ['../../assets/styles/common.style.css', '../../assets/styles/home-who-we-are.style.css']
})

export class HomeWhoWeAreComponent {
    constructor(private router: Router) {
    }

    ngOnInit() {
        window.scrollTo(0,0);
    }
}
