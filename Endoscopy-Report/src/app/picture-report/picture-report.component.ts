import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'picture-report',
  templateUrl: './picture-report.component.html',
  styleUrls: ['./picture-report.component.css','./../app.component.css']
})
export class PictureReportComponent implements OnInit {
  endoscopyData:any;
  constructor(private router: Router,
    private route: ActivatedRoute) {     
  }

  ngOnInit() {
    this.route.queryParams.subscribe((patientEnquiryQuery)=>{
      this.endoscopyData=JSON.parse(atob(patientEnquiryQuery.patientEnquiryFormData));
      scrollTo(0,0);
    })    
  }
}