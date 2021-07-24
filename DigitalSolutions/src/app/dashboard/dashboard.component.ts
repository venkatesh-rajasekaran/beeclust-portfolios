import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../assets/styles/common.style.css']
})

export class DashboardComponent {
  constructor(private router: Router) {
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }
}
