import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import doctorsList from './../../demodata/doctors.json'

@Component({
  selector: 'patient-enquiry',
  templateUrl: './patient-enquiry.component.html',
  styleUrls: ['./patient-enquiry.component.css','./../app.component.css']
})

export class PatientEnquiryComponent implements OnInit {
  patientName:string="";
  dateOfBirth=new Date();
  patientAge:number=0;
  recordNumber:number=0;
  dateOfProcedure=new Date();
  referringPhysician:string="";
  endoscopist:string="";
  procedurePeformed	:string="";	
  indications	:string="";	
  esophagus:string="";	
  goJunction:string="";		
  diagnosis	:string="";
  fundus:string="";			
  body:string="";
  antrum:string="";
  pylorus:string="";
  firstPart:string="";
  secondPart:string="";
  recommendations:string="";
  procTechnique:string="";		
  selectedValue:string="";
  selectedEndoscopist:string="";

  endoscopoyDoctors: string[] = doctorsList.endoscopyDoctors;
  referringPhysicians: string[] = doctorsList.referringPhysicians;
  public patient:PatientEnquiryComponent[]=[];

  constructor(private router: Router,
    private route: ActivatedRoute) {     
  }

  ngOnInit(): void {
  }
  
  onSubmit(patientEnquiryFormData:any) {
    console.log(patientEnquiryFormData.patientAge);
    console.log(patientEnquiryFormData);    
    this.router.navigate(['./patient-details'],
    {queryParams:{patientEnquiryFormData:btoa(JSON.stringify(patientEnquiryFormData))}})
  }

  onDateOfBirthChangeEvent(dobEvent: MatDatepickerInputEvent<Date>) {
    let patientDateOfBirth = `${dobEvent.value}`; 
    this.patientAge = new Date().getFullYear() - new Date(patientDateOfBirth).getFullYear();
  }
  
  onCallPictureReport(patientEnquiryFormData:any) {
    this.router.navigate(['./picture-report'],
    {queryParams:{patientEnquiryFormData:btoa(JSON.stringify(patientEnquiryFormData))}})
  }
}
