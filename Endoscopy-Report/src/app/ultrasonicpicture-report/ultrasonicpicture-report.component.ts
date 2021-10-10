import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ultrasonicpicture-report',
  templateUrl: './ultrasonicpicture-report.component.html',
  styleUrls: ['./ultrasonicpicture-report.component.css','./../app.component.css']
})
export class UltrasonicpictureReportComponent implements OnInit {
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
