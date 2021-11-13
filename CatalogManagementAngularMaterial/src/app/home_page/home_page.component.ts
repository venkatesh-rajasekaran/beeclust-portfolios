import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
 @Component({
  selector: 'app-home_page',
  templateUrl: './home_page.component.html',
  styleUrls: ['./home_page.component.css']
})
export class Home_pageComponent implements OnInit {

   
  constructor(private router: Router) {}

  ngOnInit() {
     
  }
  action(){this.router.navigate(['/product_item'])}   
  }
 