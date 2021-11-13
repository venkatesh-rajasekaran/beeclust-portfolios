import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Patient } from '../datamodels/patient';
import { ClinicalImage } from '../datamodels/clinicalimage';
import { ClinicalVideo } from '../datamodels/clinicalvideo';

@Component({
  selector: 'patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.css']
})

export class PatientManagementComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isImageSelected : boolean =false;
  isVideoSelected : boolean =false;
  i: number = 0;
  k: number = 0;

  demographyColumns = ['Id', 'FirstName', 'LastName'];
  dataSource = new MatTableDataSource<any>();
  patientList: Patient[] = [];
  selectedPatientImages: ClinicalImage[] = [];
  selectedPatientVideos: ClinicalVideo[] = [];
  selectedPatient!: string;
  selectedImageIndex: number = 0;
   
  isClicked: boolean = false;
  isDisabledprev!: boolean;
  isDisablednext!: boolean;
  selectedPatientvideosLength!: number;
  selectedPatientId!: Number;  
  indexOfSelectedvideo!: number;
  isSelected: boolean = false;
  isPlay: boolean = false;
  isDisabledprevBtn!: boolean;
  isDisablednextBtn!: boolean;
  playpause: string = "assets/images/Play.png";

  //console.log(selectedPatientImages.length==selectedImageIndex);
  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.httpClient.get("./../../assets/PatientDatabase.json").subscribe(
      patients => {
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
    let patientsMap = new Map(Object.entries(selectedRow));
    this.selectedPatientImages = patientsMap.get('clinicalImages');
    this.selectedPatientImages[this.i];
    this.selectedPatient = patientsMap.get('FirstName') + ' ' + patientsMap.get('LastName');
    this.selectedPatientId = patientsMap.get('Id');

    this.selectedPatientVideos = patientsMap.get('clinicalVideos');
    this.selectedPatientvideosLength = this.selectedPatientVideos.length;
    console.log(this.selectedPatientvideosLength - 1);
    //thumnail icons 
    if (this.selectedPatientvideosLength <= 6) {
      this.isDisablednext = true;
      this.isDisabledprev = true;
    }
    else {
      this.isDisablednext = false;
      this.isDisabledprev = true;
    }
  }
  //thumnail icon methods 
  next() {
    this.isClicked = true;
    this.isDisablednext = true;
    this.isDisabledprev = false;

  }
  previous() {
    this.isClicked = false;
    this.isDisabledprev = true;
    this.isDisablednext = false;
  }

  //main video
  playInbig(indexofvideo: number) {
    this.isVideoSelected=true;
    this.isImageSelected=false;
    console.log(this.isVideoSelected);
    this.indexOfSelectedvideo = indexofvideo;

    if (this.indexOfSelectedvideo == 0) {
      this.isDisabledprevBtn = true;
      this.isDisablednextBtn = false;
    }
    else if (this.indexOfSelectedvideo == this.selectedPatientvideosLength - 1) {
      this.isDisablednextBtn = true;
      this.isDisabledprevBtn = false;
    }
    else {
      this.isDisablednextBtn = false;
      this.isDisabledprevBtn = false;
    }
  }

  //main video icon methods
  goToprev() {
    if (this.indexOfSelectedvideo == 0)
      this.isDisabledprevBtn = true;
    else {
      this.indexOfSelectedvideo -= 1;
      this.isDisabledprevBtn = false;
      this.isDisablednextBtn = false;
    }
  }
  goTonext() {

    if (this.indexOfSelectedvideo == this.selectedPatientvideosLength - 1)
      this.isDisablednextBtn = true;
    else {
      this.indexOfSelectedvideo += 1;
      this.isDisablednextBtn = false;
      this.isDisabledprevBtn = false;
    }
  }

  playPause() {
    var mainVideo: any = document.getElementById('mainvideo');
    if (mainVideo.paused) {
      this.playpause = "assets/images/Pause.png";
      mainVideo.play();
    }
    else {
      this.playpause = "assets/images/Play.png"
      mainVideo.pause();
    }
  }

  //Method for click on Thumbnail Images
  onThumbnailSelect(endoscopyImage: number) {
    this.isImageSelected =true;
    this.isVideoSelected=false;
    console.log(this.isImageSelected);
    this.selectedImageIndex = endoscopyImage;
  }

  //next method for main Image
  nextImage() {
    if (this.selectedImageIndex + 1 < this.selectedPatientImages.length) {
      this.selectedImageIndex++;
    }//end of if loop
  }

  //prev method for main Image
  prevImage() {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;

    }//end of if loop
  }

  //Forward method for Thumbnail Image
  forward() {
    this.i = this.i + 6;
  }

  //Backward method for Thumbnail Image
  backward() {
    this.i = this.i - 6;
  }
}