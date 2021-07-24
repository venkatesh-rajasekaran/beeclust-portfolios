import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './app.component.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/common.style.css']
})

export class AppComponent {
  title = 'BeeClust Technologies';
  cardToLoad: string = '';

  constructor(private router: Router,
    private appComponentService: AppComponentService){
  }

  ngOnInit() {
    this.appComponentService.selectedServiceOfferedCard.asObservable().subscribe((selectedCard: string) => {      
      this.cardToLoad = selectedCard;
      window.scrollTo(0, 0);
    })
  }
}
