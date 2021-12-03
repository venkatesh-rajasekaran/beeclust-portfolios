import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../catalog.service'; 

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css','./../app.component.css']
})
export class ClassificationComponent implements OnInit {
  public catalogs:any=[]; 
  
  constructor(private _catalogService:CatalogService,private router: Router) {  }
    
  ngOnInit()
  { 
    this._catalogService.getCatalogs().subscribe(data=>this.catalogs=data);
  }
  action(){this.router.navigate(['/uom_details'])}  
  action1(){this.router.navigate(['/catalog_configuration'])}  
}
