import { Component, OnInit } from '@angular/core';
import inventoryDetails from 'src/assets/inventoryInfo.json';
import { Inventoryinformation } from '../Interfaces/inventoryInformation';


@Component({
  selector: 'app-inventory-info',
  templateUrl: './inventory-info.component.html',
  styleUrls: ['./inventory-info.component.css']
})
export class InventoryInfoComponent implements OnInit {

  //using interface Inventoryinformation for inventoryDetail
  public inventoryDetail: Inventoryinformation;

  constructor() {
    //assign json data to vble inventoryDetail
    this.inventoryDetail = inventoryDetails;
  }

  ngOnInit(): void {
  }


}
