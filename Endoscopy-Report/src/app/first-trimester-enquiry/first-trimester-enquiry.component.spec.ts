import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTrimesterEnquiryComponent } from './first-trimester-enquiry.component';

describe('FirstTrimesterEnquiryComponent', () => {
  let component: FirstTrimesterEnquiryComponent;
  let fixture: ComponentFixture<FirstTrimesterEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTrimesterEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTrimesterEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
