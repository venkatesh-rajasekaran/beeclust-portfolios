import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentService } from './../app.component.service';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css','./../app.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router,
    private appComponentService: AppComponentService) {
  }
  ngOnInit(): void {
  }
  
  homePage(){
    this.router.navigateByUrl('mainpage');
  }

  patientEnquiry() {
    this.router.navigateByUrl('patient-enquiry');
  }

  ultraPatientEnquiry() {
    this.router.navigateByUrl('ultrasonicpatient-enquiry'); 
  }

  firstTrimesterReportEnquiry() {
    this.router.navigateByUrl('first-trimester-enquiry'); 
  }
  
}
