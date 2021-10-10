import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./../app.component.css']
})

export class PatientDetailsComponent implements OnInit {    

  constructor(private router: Router,
    private route: ActivatedRoute) {     
  }

  endoscopyData:any;
  ngOnInit() {
    this.route.queryParams.subscribe((patientEnquiryQuery)=>{
      this.endoscopyData=JSON.parse(atob(patientEnquiryQuery.patientEnquiryFormData));
      console.log(this.endoscopyData);
      scrollTo(0,0);
    })
  }
}
