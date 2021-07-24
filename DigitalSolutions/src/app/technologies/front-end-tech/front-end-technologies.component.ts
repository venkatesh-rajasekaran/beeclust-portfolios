import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../../app.component.service';

@Component({
    selector: 'front-end-technologies',
    templateUrl: './front-end-technologies.component.html',
    styleUrls: ['../../../assets/styles/common.style.css', '../../../assets/styles/front-end-technologies.style.css']
})

export class FrontEndTechnologiesComponent {
    constructor(private router: Router,
        private appComponentService: AppComponentService) {
    }

    ngOnInit() {
        console.log('in FrontEndTechnologiesComponent');
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
