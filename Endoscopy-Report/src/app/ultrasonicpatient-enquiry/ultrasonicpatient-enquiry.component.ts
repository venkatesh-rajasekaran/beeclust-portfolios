import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import doctorsList from './../../demodata/doctors.json'

@Component({
  selector: 'ultrasonicpatient-enquiry',
  templateUrl: './ultrasonicpatient-enquiry.component.html',
  styleUrls: ['./ultrasonicpatient-enquiry.component.css','./../app.component.css']
})
export class UltrasonicpatientEnquiryComponent implements OnInit {
  patientName:string="";
  dateOfBirth=new Date();
  patientAge:number=0;
  recordNumber:number=0;
  dateOfProcedure=new Date();
  referringPhysician:string="";
  selectedValue:string="";
  selectedsonologist: string="";
  procedurePeformed	:string="";	
  indications:string="";	
  liver:string="";
  gallBladder:string="";
  spleen:string="";
  pancreas:string="";
  aorticAreas:string="";
  rightKidney:string="";
  leftKidney:string="";
  urinaryBladder:string="";
  endometrium:string="";
  rightOvary:string="";
  leftOvary:string="";	
  ovaryFindings:string="";
  impression:string="";

  constructor(private router: Router,
    private route: ActivatedRoute) {     
  }

  ngOnInit(): void {
  }
  onSubmit(patientEnquiryFormData:any) {       
    this.router.navigate(['./ultrasonicpatient-details'],
    {queryParams:{patientEnquiryFormData:btoa(JSON.stringify(patientEnquiryFormData))}})
  }
  callPictureReport(patientEnquiryFormData:any){
    this.router.navigate(['./ultrasonicpicture-report'],
    {queryParams:{patientEnquiryFormData:btoa(JSON.stringify(patientEnquiryFormData))}})
  }
  onDateOfBirthChangeEvent(dobEvent: MatDatepickerInputEvent<Date>) {
    let patientDateOfBirth = `${dobEvent.value}`; 
    this.patientAge = new Date().getFullYear() - new Date(patientDateOfBirth).getFullYear();
  }

  

}





