import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogManagementService } from 'src/app/catalog-management.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  Orderdetails:any=[];
  datasource=new MatTableDataSource();
  
  displayedColumns:string[]=["Item ID","Item Description","Quantity","Other Charges","Line Total"];
  constructor(private catalogManagementService:CatalogManagementService) { }
 
  ngOnInit(): void {  
    this.catalogManagementService.getOrderdetails().subscribe(data=>{
    this.Orderdetails=data;
    this.datasource.data=this.Orderdetails;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }); 
}
}


 // "Date":"Feb 5, 2021",
    // "Time" :"05:26:10 PM",
    // "OrderNo":"Y00001A",
    // "OrderDateTime":"Jan 25,2021 11:48 AM",
    // "OrderType":"Online",
    // "Status":"Created",
    // "CarrierService":"Yes",
    // "ShipTo":"Buyer",
    // "BillTo":"Buyer",
    // "PaymentStatus":"Not-applicable",
    // "Currency":"USD",
    // "CustomerpoNo":1290134,
    // "HeaderCharges":0.00,
    // "TotalAmount":0.00,
