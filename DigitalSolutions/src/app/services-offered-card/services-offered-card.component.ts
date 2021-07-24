import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'services-offered-card',
    templateUrl: './services-offered-card.component.html',
    styleUrls: ['../../assets/styles/common.style.css', '../../assets/styles/services-offered-card.style.css']
})

export class ServicesOfferedCardComponent {
    constructor(private router: Router) {
    }

    ngOnInit() {
        window.scrollTo(0,0);
    }
}
