import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatalog } from './catalog';

@Injectable()
export class CatalogService {
  private url:string="assets/data/catalog_management.json";
  constructor(private http:HttpClient) { }
  public getCatalogs():Observable<ICatalog[]>
  {
    return this.http.get<ICatalog[]>(this.url);
  }
}





 