import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicpictureReportComponent } from './ultrasonicpicture-report.component';

describe('UltrasonicpictureReportComponent', () => {
  let component: UltrasonicpictureReportComponent;
  let fixture: ComponentFixture<UltrasonicpictureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrasonicpictureReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonicpictureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
