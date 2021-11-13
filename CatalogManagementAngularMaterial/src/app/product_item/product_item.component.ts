import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../catalog.service'; 
  
@Component({
  selector: 'app-product_item',
  templateUrl: './product_item.component.html',
  styleUrls: ['./product_item.component.css']
})
export class Product_itemComponent implements OnInit {
   public catalogs:any=[]; 
  
  constructor(private _catalogService:CatalogService,private router: Router) {  }
    
  ngOnInit()
  { 
    this._catalogService.getCatalogs().subscribe(data=>this.catalogs=data);
  }
  action(){this.router.navigate(['/association_item'])}  
  action1(){this.router.navigate(['/product_item'])}  
}
 
