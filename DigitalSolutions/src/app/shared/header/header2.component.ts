import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../../app.component.service';

@Component({
    selector: 'app-header2',
    templateUrl: './header2.component.html',
    styleUrls: ['../../../assets/styles/common.style.css','../../../assets/styles/header2.style.css']
})

export class AppHeader2Component {
    isMobileDevice: boolean = false;
    constructor(private router: Router,
        private appComponentService: AppComponentService) {
    }

    ngOnInit() {
        this.checkIsMobileDevice();
        window.scrollTo(0,0);
    }

    navigatePage(pageName: string){
        this.appComponentService.selectedServiceOfferedCard.next(pageName);
        return false;
    }

    checkIsMobileDevice() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isMobileDevice = true;
        } else {
            this.isMobileDevice = false;
        }
        console.log('in checkIsMobileDevice() => is mobile device:', this.isMobileDevice);
    }
}