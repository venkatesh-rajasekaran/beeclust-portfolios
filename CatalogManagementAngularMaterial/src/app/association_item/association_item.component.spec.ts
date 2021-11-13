import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Association_itemComponent } from './association_item.component';

describe('Table2Component', () => {
  let component: Association_itemComponent;
  let fixture: ComponentFixture<Association_itemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Association_itemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Association_itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
