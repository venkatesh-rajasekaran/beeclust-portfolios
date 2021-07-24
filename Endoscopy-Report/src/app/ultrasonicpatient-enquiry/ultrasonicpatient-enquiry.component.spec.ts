import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicpatientEnquiryComponent } from './ultrasonicpatient-enquiry.component';

describe('UltrasonicpatientEnquiryComponent', () => {
  let component: UltrasonicpatientEnquiryComponent;
  let fixture: ComponentFixture<UltrasonicpatientEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrasonicpatientEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonicpatientEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
