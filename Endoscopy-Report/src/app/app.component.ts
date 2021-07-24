import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './app.component.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PatientEnquiryComponent} from './patient-enquiry/patient-enquiry.component';
import { PictureReportComponent } from './picture-report/picture-report.component';

/*
@Component({
  selector: 'app-root',
  templateUrl: './picture-report/picture-report.component.html',
  styleUrls: ['./app.component.css']
})
*/

/*
@Component({
  selector: 'app-root',
  templateUrl: './patient-details/patient-details.component.html',
  styleUrls: ['./patient-details/patient-details.component.css']
})
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Endoscopy-Report';
  patient:PatientEnquiryComponent[]=[];
  constructor(private router: Router,
    private appComponentService: AppComponentService) {
  }
  
  ngOnInit() {
    this.appComponentService.selectedServiceOfferedCard.asObservable().subscribe((formData: string) => {      
      console.log('data ', formData);      
    })	
  }

}
