import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
export interface IProductsReport {
  rank: string;
  item_id: string;
  description: string;
  sold: string;
  price:string;
  revenue:string 
}

const ELEMENT_DATA: IProductsReport[] = [
  {rank:'1',item_id: 'Colony2',description:'Component Item',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'2',item_id: 'Colony3',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'3',item_id: 'Colony4',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'}, 
  {rank:'4',item_id: 'Colony55',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'5',item_id: 'Colony10',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'6',item_id: 'Colony12',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'7',item_id: 'Colony14',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'8',item_id: 'Colony15',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:'9',item_id: 'Colony18',description:' ',sold:'300.00',price:"$0.00",revenue:'$0.00'},
  {rank:' Summary',item_id: ' ',description:' ',sold:'2400.00',price:' ',revenue:' '},
];


@Component({
  selector: 'app-productes-report',
  templateUrl: './productes-report.component.html',
  styleUrls: ['./productes-report.component.css']
})
export class ProductesReportComponent implements OnInit {

  fileName= 'Product_Report.xlsx';  
  displayedColumns: string[] = ['rank', 'item_id', 'description', 'sold','price','revenue'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

  ngOnInit(): void {
  }

}
