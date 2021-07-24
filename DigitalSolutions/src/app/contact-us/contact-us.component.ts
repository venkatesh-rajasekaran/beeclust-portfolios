import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../app.component.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['../../assets/styles/common.style.css', '../../assets/styles/contact-us.style.css']
})

export class ContactUsComponent {
  constructor(private router: Router,
    private appComponentService: AppComponentService){
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  navigatePage(pageName: string) {
    this.appComponentService.selectedServiceOfferedCard.next(pageName);
    return false;
  }
}
