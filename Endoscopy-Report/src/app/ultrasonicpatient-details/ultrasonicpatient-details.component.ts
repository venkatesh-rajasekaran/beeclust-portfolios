import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ultrasonicpatient-details',
  templateUrl: './ultrasonicpatient-details.component.html',
  styleUrls: ['./ultrasonicpatient-details.component.css','./../app.component.css']
})
export class UltrasonicpatientDetailsComponent implements OnInit {
  ultrasonicData:any;
  constructor(private router: Router,
    private route: ActivatedRoute) {     
  }

  ngOnInit() {
    this.route.queryParams.subscribe((patientEnquiryQuery)=>{
      this.ultrasonicData=JSON.parse(atob(patientEnquiryQuery.patientEnquiryFormData));
      scrollTo(0,0);
    })
  }
}
