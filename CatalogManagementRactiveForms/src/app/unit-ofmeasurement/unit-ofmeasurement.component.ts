import { Component, OnInit } from '@angular/core';
import { CatalogManagementService } from '../catalog-management.service';

@Component({
  selector: 'app-unit-ofmeasurement',
  templateUrl: './unit-ofmeasurement.component.html',
  styleUrls: ['./unit-ofmeasurement.component.css']
})
export class UnitOfmeasurementComponent implements OnInit {

  alternateUnits:any=[];

  //create an object to CatalogManagementService
  constructor(private catalogManagementservice:CatalogManagementService) { }
  
  ngOnInit(): void {
    //subscribe the getAlterunits() of service to access the data.
    this.catalogManagementservice.getAlternateunits().subscribe(data => this.alternateUnits = data);
  }

}
