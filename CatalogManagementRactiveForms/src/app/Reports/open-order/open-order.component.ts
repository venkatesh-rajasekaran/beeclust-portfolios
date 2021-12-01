import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogManagementService } from 'src/app/catalog-management.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-open-order',
  templateUrl: './open-order.component.html',
  styleUrls: ['./open-order.component.css']
})
export class OpenOrderComponent implements OnInit {

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  Openorderdetails:any=[];
  datasource=new MatTableDataSource();
  
  displayedColumns:string[]=["Enterprise Key","Buyer Organization Code","Requested Ship Date","Order No","Order Date","Status","Revenue"];
  constructor(private catalogManagementService:CatalogManagementService) { }
 
  ngOnInit(): void {  
    this.catalogManagementService.getOpenordersdetails().subscribe(data=>{
    this.Openorderdetails=data;
    this.datasource.data=this.Openorderdetails;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }); 
}


}
