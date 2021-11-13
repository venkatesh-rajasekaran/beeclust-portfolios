import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class AppComponentService {
    selectedServiceOfferedCard = new Subject<string>();
    constructor() {  
       
    }
   
}
