import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfmeasurementComponent } from './unit-ofmeasurement.component';

describe('UnitOfmeasurementComponent', () => {
  let component: UnitOfmeasurementComponent;
  let fixture: ComponentFixture<UnitOfmeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitOfmeasurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfmeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
