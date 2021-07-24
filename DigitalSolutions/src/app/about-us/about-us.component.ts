import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from '../app.component.service';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../../assets/styles/common.style.css', '../../assets/styles/about-us.style.css']
})

export class AboutUsComponent {
  constructor(private router: Router,
    private appComponentService: AppComponentService){
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  navigatePage(pageName: string) {
    this.appComponentService.selectedServiceOfferedCard.next(pageName);
  }
}
