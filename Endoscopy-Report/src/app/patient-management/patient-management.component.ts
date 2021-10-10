import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { Patient } from '../datamodels/patient';
import { ClinicalImage } from '../datamodels/clinicalimage';

@Component({
  selector: 'patient-management',
  templateUrl:'./patient-management.component.html',
  styleUrls: ['./patient-management.component.css']
})

export class PatientManagementComponent implements OnInit {
  demographyColumns = ['Id', 'FirstName', 'LastName'];
  dataSource = new MatTableDataSource<any>();
  patientList: Patient[] = [];
  selectedPatientImages: ClinicalImage[] = [];  

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get("./../../assets/PatientDatabase.json").subscribe(
      patients =>  {        
        console.log(patients);        
        this.patientList = Object.values(patients);      
        this.dataSource.data = this.patientList;
      },
      error => console.log('Error occurred while parsing patients json file.', error)
    );
  }

  private getData(): Patient[] {
    return this.patientList;
  }

  onSelect(selectedRow: Patient) {
    //console.log(selectedRow);

    let patientsMap = new Map(Object.entries(selectedRow));
    this.selectedPatientImages = patientsMap.get('clinicalImages');

    /*
    for (const [key, value] of Object.entries(selectedRow)) {
      if (key.indexOf("clinicalImages") != -1) {
        this.selectedPatientImages = value;
        break;
      }
      console.log(`${key}: ${value}`);
    }
    */
  }
}