import { Component, OnInit } from '@angular/core';
import { CatalogManagementService } from '../catalog-management.service';


@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  productdet:any=[];

  constructor(private catalogManagementservice:CatalogManagementService) { }

  ngOnInit(): void {
    //use service method getProductunit()
    this.productdet=this.catalogManagementservice.getProductunit();
  }


}
