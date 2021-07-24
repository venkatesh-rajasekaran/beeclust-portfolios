import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-trimester-enquiry',
  templateUrl: './first-trimester-enquiry.component.html',
  styleUrls: ['./first-trimester-enquiry.component.css',
              './../app.component.css']
})

export class FirstTrimesterEnquiryComponent implements OnInit {
  patientName:string="";
  dateOfBirth=new Date();
  patientAge:number=0;
  recordNumber:number=0;
  dateOfProcedure=new Date();
  referringPhysician:string="";
  selectedValue:string="";
  selectedsonologist: string="";
  procedurePeformed	:string="";
  lmpDate=new Date();
  uslmpDate=new Date();
  indications:string="";
  history:string="";
  esophagus:string="";
  procTechnique:string="";
  pragnancy:string="";
  cardiacActivity:string="";
  placenta:string="";
  amnioticFluid:string="";
  fetalHeartRate:string="";
  crownRumpLength:string="";
  nuchalTranslucency:string="";
  nasalBone:string="";
  firstTrimesterAnatomy:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
