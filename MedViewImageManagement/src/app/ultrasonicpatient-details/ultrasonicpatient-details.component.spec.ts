import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicpatientDetailsComponent } from './ultrasonicpatient-details.component';

describe('UltrasonicpatientDetailsComponent', () => {
  let component: UltrasonicpatientDetailsComponent;
  let fixture: ComponentFixture<UltrasonicpatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrasonicpatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonicpatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
