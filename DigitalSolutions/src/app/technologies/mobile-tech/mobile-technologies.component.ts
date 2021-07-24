import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../../app.component.service';

@Component({
    selector: 'mobile-technologies',
    templateUrl: './mobile-technologies.component.html',
    styleUrls: ['../../../assets/styles/common.style.css', '../../../assets/styles/mobile-technologies.style.css']
})

export class MobileTechnologiesComponent {
    constructor(private router: Router,
        private appComponentService: AppComponentService) {
    }

    ngOnInit() {
        console.log('in MobileTechnologiesComponent');
        window.scrollTo(0,0);
    }

    navigatePage(pageName: string) {
        this.appComponentService.selectedServiceOfferedCard.next(pageName);
        return false;
    }
    
    btnClick() {
        this.router.navigateByUrl('contact-us');
}
}
