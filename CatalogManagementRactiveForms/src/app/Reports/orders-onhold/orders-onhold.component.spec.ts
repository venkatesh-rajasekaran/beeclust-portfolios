import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOnholdComponent } from './orders-onhold.component';

describe('OrdersOnholdComponent', () => {
  let component: OrdersOnholdComponent;
  let fixture: ComponentFixture<OrdersOnholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersOnholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOnholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
