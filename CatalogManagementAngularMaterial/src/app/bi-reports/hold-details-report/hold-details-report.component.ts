import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
  
export interface IHoldDetailsReport{
  order_no:string;
  status:string;
  date:string;
  amount:string;
  hold:string;
}


@Component({
  selector: 'app-hold-details-report',
  templateUrl: './hold-details-report.component.html',
  styleUrls: ['./hold-details-report.component.css']
})
export class HoldDetailsReportComponent implements OnInit {

  displayedColumns: string[] = ['order_no', 'status', 'date','amount','hold'];
  dataSource = new MatTableDataSource<any>();
  holdList: IHoldDetailsReport[] = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get("./../../assets/data/order-holddetails-report.json").subscribe(
      holding => {
        this.holdList = Object.values(holding);
        this.dataSource.data = this.holdList;
      }
    );
  }

}
