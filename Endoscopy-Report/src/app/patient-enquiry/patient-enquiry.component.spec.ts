import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEnquiryComponent } from './patient-enquiry.component';

describe('PatientEnquiryComponent', () => {
  let component: PatientEnquiryComponent;
  let fixture: ComponentFixture<PatientEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
