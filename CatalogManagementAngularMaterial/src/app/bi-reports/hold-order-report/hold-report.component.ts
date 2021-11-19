import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
  
export interface IHoldReport{
  hold_type:string;
  orders:number;
  resolved_orders:number;
  unresolved_orders:number;
}

@Component({
  selector: 'app-hold-report',
  templateUrl: './hold-report.component.html',
  styleUrls: ['./hold-report.component.css']
})
export class HoldReportComponent implements OnInit {

  displayedColumns: string[] = ['hold_type', 'orders', 'resolved_orders','unresolved_orders'];
  dataSource = new MatTableDataSource<any>();
  holdList: IHoldReport[] = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get("./../../assets/data/order-hold-report.json").subscribe(
      holds => {
        this.holdList = Object.values(holds);
        this.dataSource.data = this.holdList;
      }
    );
  }

}
