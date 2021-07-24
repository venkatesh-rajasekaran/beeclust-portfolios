import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../app.component.service';

@Component({
    selector: 'services-offered-card2',
    templateUrl: './services-offered-card2.component.html',
    styleUrls: ['../../assets/styles/common.style.css', '../../assets/styles/services-offered-card2.style.css']
})

export class ServicesOfferedCard2Component {
    constructor(private router: Router,
        private appComponentService: AppComponentService) {
    }

    ngOnInit() {
        window.scrollTo(0,0);
    }

    redirectToServiceOffered(pageName: string) {
        console.log('in redirectToServiceOffered => pageName: ', pageName);
        this.appComponentService.selectedServiceOfferedCard.next(pageName);
        return false;
    }
    btnFrontClick() {
        this.router.navigateByUrl('front-end-technologies');
            }
    btnBackClick() {
                this.router.navigateByUrl('back-end-technologies');
                    }
    btnMobiClick() {
            this.router.navigateByUrl('mobile-technologies');
            }
}
