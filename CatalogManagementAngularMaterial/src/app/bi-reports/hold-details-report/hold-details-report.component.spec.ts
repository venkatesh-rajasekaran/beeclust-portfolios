import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldDetailsReportComponent } from './hold-details-report.component';

describe('HoldDetailsReportComponent', () => {
  let component: HoldDetailsReportComponent;
  let fixture: ComponentFixture<HoldDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
