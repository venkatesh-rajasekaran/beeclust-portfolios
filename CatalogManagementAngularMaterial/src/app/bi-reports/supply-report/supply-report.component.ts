import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AfterViewInit ,ViewChild} from '@angular/core';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';   //Excel Workbook
  
export interface ISupplyReport{
  item_id:string;
  onhandsupply:string;
  demand:string;
  supply:string;
}
 
 @Component({
  selector: 'app-supply-report',
  templateUrl: './supply-report.component.html',
  styleUrls: ['./supply-report.component.css']
})
export class SupplyReportComponent implements AfterViewInit {
 
  fileName= 'Supply_Report.xlsx';  
  displayedColumns: string[] = ['item_id', 'onhandsupply', 'demand','supply'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!:MatSort;
  supplyList: ISupplyReport[] = [];
  constructor(private httpClient: HttpClient) { }

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
       //XLSX.utils.table_to_sheet takes a table DOM element and returns a worksheet resembling the input table

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
       //wb=>workbook   ws=>worksheet

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
    this.httpClient.get("./../../assets/data/supply-report.json").subscribe(
      supplies => {
        this.supplyList = Object.values(supplies); //It returns an array of a given object's own property values
        this.dataSource.data = this.supplyList;
       // console.log(this.dataSource);
       // console.log(this.supplyList);
      }
    );
   }

}
