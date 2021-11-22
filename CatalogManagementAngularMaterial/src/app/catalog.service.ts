import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatalog } from './catalog';
import { OpenReport } from './open-orders-report';   

@Injectable()
export class CatalogService {

  private url:string="assets/data/catalog_management.json";
  private url1:string="assets/data/open-order-reports.json";
  constructor(private http:HttpClient) { }
  public getCatalogs():Observable<ICatalog[]>
  {
    return this.http.get<ICatalog[]>(this.url);
  }
   
   public getOrder():Observable<OpenReport[]>
   {
     return this.http.get<OpenReport[]>(this.url1);
   }

}





 