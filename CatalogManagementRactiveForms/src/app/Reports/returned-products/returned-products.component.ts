import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogManagementService } from 'src/app/catalog-management.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-returned-products',
  templateUrl: './returned-products.component.html',
  styleUrls: ['./returned-products.component.css']
})
export class ReturnedProductsComponent implements OnInit {

  
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  returnedProductsdetails:any=[];
  datasource=new MatTableDataSource();
  
  displayedColumns:string[]=["Rank","Item ID","Return Reason","No of Item(s) Returned"];
  constructor(private catalogManagementService:CatalogManagementService) { }
 
  ngOnInit(): void {  
    this.catalogManagementService.getReturnedproductsdetails().subscribe(data=>{
    this.returnedProductsdetails=data;
    this.datasource.data=this.returnedProductsdetails;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }); 
}

}
