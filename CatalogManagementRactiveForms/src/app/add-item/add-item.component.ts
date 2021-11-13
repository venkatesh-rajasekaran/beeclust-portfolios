import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CatalogManagementService } from '../catalog-management.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  allunits:any=[];

  constructor(private formBuilder:FormBuilder,
              private catalogManagementservice:CatalogManagementService) { }
  
  ngOnInit(): void {
    //invoke getProductunit() of CatalogManagementService and assign it to allunits[].   
    this.allunits=this.catalogManagementservice.getProductunit();     
  
  } 
              
  
  //print all values on console
  Aboutproduct=this.formBuilder.group({
    itemid:['',Validators.required],
    uom:['',Validators.required],
    description:['',Validators.required],
    masterCatalogue:['',Validators.required],
    condition:['',Validators.required]
  });

  display()
  {
   console.log(this.Aboutproduct.value);
  }


  //change the unit value dependig on selected option
  onUnitchange( uom:any )  
  {
    console.log("Unit Of Measure : ");
    let selectUnit=uom.value;
    console.log(selectUnit);
  }
}