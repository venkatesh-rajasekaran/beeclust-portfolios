import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uom_details',
  templateUrl:'./uom_details.component.html',
  styleUrls: ['./uom_details.component.css']
})
export class Uom_detailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  action(){this.router.navigate(['/classification'])}  
  action1(){this.router.navigate(['/association_item'])}  
}
