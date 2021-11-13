import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product_itemComponent } from './product_item.component';

describe('Product_itemComponent', () => {
  let component: Product_itemComponent;
  let fixture: ComponentFixture<Product_itemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product_itemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product_itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
