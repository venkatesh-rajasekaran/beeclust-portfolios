import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductesReportComponent } from './productes-report.component';

describe('ProductesReportComponent', () => {
  let component: ProductesReportComponent;
  let fixture: ComponentFixture<ProductesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
