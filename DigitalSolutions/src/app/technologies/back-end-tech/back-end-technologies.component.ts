import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../../app.component.service';

@Component({
    selector: 'back-end-technologies',
    templateUrl: './back-end-technologies.component.html',
    styleUrls: ['../../../assets/styles/common.style.css', '../../../assets/styles/back-end-technologies.style.css']
    
})

export class BackEndTechnologiesComponent {
    constructor(private router: Router,
        private appComponentService: AppComponentService) {
    }

    ngOnInit() {
        console.log('in BackEndTechnologiesComponent');
        window.scrollTo(0,0);
    }

    navigatePage(pageName: string) {
        this.appComponentService.selectedServiceOfferedCard.next(pageName);
        return false;
    }
    btnClick() {
        this.router.navigateByUrl('contact-us');
};
}
