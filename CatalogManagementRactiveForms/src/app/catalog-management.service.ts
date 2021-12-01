import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productinfo } from './Interfaces/productInfromation';
import { OrderDetails } from './Interfaces/orderdetails';
import { OrderonHolddetails } from './Interfaces/orderOnholdDetails';
import { ReturnedproductsDetails } from './Interfaces/returnedProductsdetails';
import { TopproductsDetails } from './Interfaces/topProductsDetails';
import { Openorderdetails } from './Interfaces/openOrderdetails';

@Injectable({
  providedIn: 'root'
})

export class CatalogManagementService {

//list of product units
  getProductunit():Productinfo[]{
       return[
        {productid:1,unit : 'Kilogram'},
        {productid:2,unit : 'pieces'},
        {productid:3,unit : 'set'},
        {productid:4,unit : 'item'}
       ]

  }

    //fetching data using httpclientmodule 
    constructor(private httpClient: HttpClient) { } 
  
    private url:string="/assets/productdetails.json";
    private reportsUrl:string[]=["/assets/data/OrderDetails.json",
                                 "/assets/data/OrderonHolddetails.json",
                                 "/assets/data/ReturnedproductsDetails.json",
                                 "/assets/data/TopproductsDetails.json",
                                 "/assets/data/OpenordersDetails.json"   
                                ];

    //reports related Data URL's
    
   
    getAlternateunits():Observable<Productinfo[]>{
            return this.httpClient.get<Productinfo[]>(this.url);
            //using http get request to fetch the data from url
    }

    getOrderdetails():Observable<OrderDetails[]>{
            return this.httpClient.get<OrderDetails[]>(this.reportsUrl[0]);
    }
    getOrderonHolddetails():Observable<OrderonHolddetails[]>{
      return this.httpClient.get<OrderonHolddetails[]>(this.reportsUrl[1]);
    }
    getReturnedproductsdetails():Observable<ReturnedproductsDetails[]>{
      return this.httpClient.get<ReturnedproductsDetails[]>(this.reportsUrl[2]);
    }
    getTopproductsdetails():Observable<TopproductsDetails[]>{
      return this.httpClient.get<TopproductsDetails[]>(this.reportsUrl[3]);
    }
      getOpenordersdetails():Observable<Openorderdetails[]>{
        return this.httpClient.get<Openorderdetails[]>(this.reportsUrl[4]);
    }

}


