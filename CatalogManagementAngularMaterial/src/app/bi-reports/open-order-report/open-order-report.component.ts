import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OpenReport } from 'src/app/open-orders-report';
import { CatalogService } from 'src/app/catalog.service'; 

 
@Component({
  selector: 'app-open-order-report',
  templateUrl: './open-order-report.component.html',
  styleUrls: ['./open-order-report.component.css']
})
export class OpenOrderReportComponent implements OnInit {
  orders:OpenReport[]=[];
  public displayedColumns=['key','buyer','ship_date','order_no','order_date','status','revenue'];
  //the source where we will get the data
  public dataSource=new MatTableDataSource<OpenReport>();
  constructor(private _catalogService:CatalogService) { }

  ngOnInit(): void {
    this.getOrder();
  }
 getOrder()
 {
   this._catalogService.getOrder().subscribe((res)=>{this.dataSource.data=res;})
 }
 
}
