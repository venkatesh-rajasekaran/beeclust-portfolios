import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productinfo } from './Interfaces/productInfromation';

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
   
    getAlternateunits():Observable<Productinfo[]>{
            return this.httpClient.get<Productinfo[]>(this.url);
            //using http get request to fetch the data from url
    }
}
