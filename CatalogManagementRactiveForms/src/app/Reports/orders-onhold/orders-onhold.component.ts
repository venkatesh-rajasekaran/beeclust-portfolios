import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogManagementService } from 'src/app/catalog-management.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orders-onhold',
  templateUrl: './orders-onhold.component.html',
  styleUrls: ['./orders-onhold.component.css']
})
export class OrdersOnholdComponent implements OnInit {

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  OrderonHolddetails:any=[];
  datasource=new MatTableDataSource();
  
  displayedColumns:string[]=["Order No","Status","Order Date","Total Amount","Hold Resolved"];
  constructor(private catalogManagementService:CatalogManagementService) { }
 
  ngOnInit(): void {  
    this.catalogManagementService.getOrderonHolddetails().subscribe(data=>{
    this.OrderonHolddetails=data;
    this.datasource.data=this.OrderonHolddetails;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }); 
}
}

