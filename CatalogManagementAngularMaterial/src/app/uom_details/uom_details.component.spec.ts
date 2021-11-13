import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uom_detailsComponent } from './uom_details.component';

describe('Table3Component', () => {
  let component: Uom_detailsComponent;
  let fixture: ComponentFixture<Uom_detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uom_detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uom_detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
