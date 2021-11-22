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
  disablePrevImageThumbnailBtn !: boolean;
  disableNextImageThumbnailBtn !: boolean;
  selectedPatientvideosLength!: number;
  selectedPatientImagesLength!: number;
  selectedPatientId!: Number;  
  indexOfSelectedvideo!: number;
  isSelected: boolean = false;
  isPlay: boolean = false;  
  disablePrevVideoThumbnailBtn!: boolean;
  disableNextVideoThumbnailBtn!: boolean;
  disablePrevMainWndBtn!: boolean;
  disableNextMainWndBtn!: boolean;
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
    this.selectedPatientImagesLength = this.selectedPatientImages.length;
    console.log(this.selectedPatientvideosLength - 1);
    this.disableImageThumbnailNavButtons();
    this.disableVideoThumbnailNavButtons();
  }

  //thumnail icon methods 
  next() {
    this.k = this.k + 6;
    this.disableVideoThumbnailNavButtons();
  }

  previous() {
    this.k = this.k - 6;
    this.disableVideoThumbnailNavButtons();
  }

  //main video
  playInbig(indexofvideo: number) {
    this.isVideoSelected=true;
    this.isImageSelected=false;
    console.log(this.isVideoSelected);
    this.indexOfSelectedvideo = indexofvideo; 
  }

  //main video icon methods
  goToprev() {
    if (this.indexOfSelectedvideo > 0) {
      this.indexOfSelectedvideo -= 1;
    }
    this.togglePreviewWindowNavButtons();
  }

  goTonext() {
    if (this.indexOfSelectedvideo < this.selectedPatientvideosLength) {
      this.indexOfSelectedvideo += 1;
    }
    this.togglePreviewWindowNavButtons();
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
    this.togglePreviewWindowNavButtons();
  }

  //prev method for main Image
  prevImage() {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    }//end of if loop
    this.togglePreviewWindowNavButtons();
  }

  //Forward method for Thumbnail Image
  forward() {
    this.i = this.i + 6;
    this.disableImageThumbnailNavButtons();
  }

  //Backward method for Thumbnail Image
  backward() {
    this.i = this.i - 6;
    this.disableImageThumbnailNavButtons();
  }

  disableImageThumbnailNavButtons() {
    //Image thumnail prev and next buttons
    if (this.selectedPatientImagesLength <= 6) {
      this.disablePrevImageThumbnailBtn = true;
      this.disableNextImageThumbnailBtn = true;
    }
    else {
      this.disableNextImageThumbnailBtn = !(this.i+6 < this.selectedPatientImagesLength);
      this.disablePrevImageThumbnailBtn = !(this.i-6 >= 0);
    }
  }

  disableVideoThumbnailNavButtons() {
    //Image thumnail prev and next buttons
    if (this.selectedPatientvideosLength <= 6) {
      this.disablePrevVideoThumbnailBtn = true;
      this.disableNextVideoThumbnailBtn = true;
    }
    else {
      this.disableNextVideoThumbnailBtn = !(this.k+6 < this.selectedPatientvideosLength);
      this.disablePrevVideoThumbnailBtn = !(this.k-6 >= 0);
    }
  }

  togglePreviewWindowNavButtons() {
    if (this.isImageSelected) {
      if (this.selectedImageIndex == 0) {
        this.disablePrevMainWndBtn = true;
        this.disableNextMainWndBtn = false;
      }
      else if (this.selectedImageIndex+1 == this.selectedPatientImagesLength) {
        this.disablePrevMainWndBtn = false;
        this.disableNextMainWndBtn = true;        
      }
      else {        
        this.disablePrevMainWndBtn = false;
        this.disableNextMainWndBtn = false;         
      }
    }
    else if (this.isVideoSelected) {
      if (this.indexOfSelectedvideo == 0) {
        this.disablePrevMainWndBtn = true;
        this.disableNextMainWndBtn = false;        
      }
      else if (this.indexOfSelectedvideo+1 == this.selectedPatientvideosLength) {
        this.disablePrevMainWndBtn = false;
        this.disableNextMainWndBtn = true;         
      }
      else {
        this.disablePrevMainWndBtn = false;
        this.disableNextMainWndBtn = false;         
      }
    }
  }
}