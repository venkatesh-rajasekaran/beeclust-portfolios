import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../../app.component.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['../../../assets/styles/common.style.css','../../../assets/styles/footer.style.css']
})

export class AppFooterComponent {
    constructor(private router: Router,
        private appComponentService: AppComponentService) {
    }

    ngOnInit() {
        window.scrollTo(0,0);
    }

    navigatePage(pageName: string) {
        this.appComponentService.selectedServiceOfferedCard.next(pageName);
        return false;
    }
}
