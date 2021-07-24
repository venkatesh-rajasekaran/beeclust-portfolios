import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementComponent } from './patient-management.component';

describe('PatientManagementComponent', () => {
  let component: PatientManagementComponent;
  let fixture: ComponentFixture<PatientManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
