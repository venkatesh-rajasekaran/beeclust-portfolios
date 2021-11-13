import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import {MaterialModule} from './material/material.module';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import {RouterModule,Routes} from '@angular/router';
import { PictureReportComponent } from './picture-report/picture-report.component';
import { AppComponentService } from './app.component.service';
import { PatientEnquiryComponent } from './patient-enquiry/patient-enquiry.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UltrasonicpatientEnquiryComponent } from './ultrasonicpatient-enquiry/ultrasonicpatient-enquiry.component';
import { UltrasonicpatientDetailsComponent } from './ultrasonicpatient-details/ultrasonicpatient-details.component';
import { UltrasonicpictureReportComponent } from './ultrasonicpicture-report/ultrasonicpicture-report.component';
import { FirstTrimesterEnquiryComponent } from './first-trimester-enquiry/first-trimester-enquiry.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';

const routes: Routes =[
  {path:'',redirectTo:'mainpage',pathMatch:'full'},
  //{path:'mainpage',component:MainpageComponent},
  {path:'patient-enquiry',component:PatientEnquiryComponent},
  {path:'patient-details',component:PatientDetailsComponent},
  {path:'picture-report',component:PictureReportComponent},
  {path:'ultrasonicpatient-enquiry',component:UltrasonicpatientEnquiryComponent},
  {path:'ultrasonicpatient-details',component:UltrasonicpatientDetailsComponent},
  {path:'ultrasonicpicture-report',component:UltrasonicpictureReportComponent},
  {path:'first-trimester-enquiry',component:FirstTrimesterEnquiryComponent},
  {path:'patient-management',component:PatientManagementComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    PictureReportComponent,
    PatientEnquiryComponent,
    UltrasonicpatientEnquiryComponent,
    UltrasonicpatientDetailsComponent,
    UltrasonicpictureReportComponent,
    MainpageComponent,
    FirstTrimesterEnquiryComponent,
    PatientManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MaterialModule,
    MatSelectModule,MatFormFieldModule,MatButtonModule,
    HttpClientModule
  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
