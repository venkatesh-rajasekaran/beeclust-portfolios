import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-association_item',
  templateUrl: './association_item.component.html',
  styleUrls: ['./association_item.component.css']
})
export class Association_itemComponent implements OnInit {
  selected = 'none';
  selected1 = 'none';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  action(){this.router.navigate(['/uom_details'])}  
  action1(){this.router.navigate(['/product_item'])}  
}

