import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogManagementService } from 'src/app/catalog-management.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TopproductsDetails } from 'src/app/Interfaces/topProductsDetails';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  topProductsdetails:any=[];
  datasource=new MatTableDataSource();
  
  displayedColumns:string[]=["Rank","Item ID","Item Description","Unit Sold","Unit Price","Revenue"];
  constructor(private catalogManagementService:CatalogManagementService) { }
 
  ngOnInit(): void {  
    this.catalogManagementService.getTopproductsdetails().subscribe(data=>{
    this.topProductsdetails=data;
    this.datasource.data=this.topProductsdetails;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }); 
 }
}
