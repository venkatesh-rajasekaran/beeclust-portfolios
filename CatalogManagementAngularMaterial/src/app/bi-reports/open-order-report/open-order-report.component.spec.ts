import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrderReportComponent } from './open-order-report.component';

describe('OpenOrderReportComponent', () => {
  let component: OpenOrderReportComponent;
  let fixture: ComponentFixture<OpenOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOrderReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
