import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalog_configurationComponent } from './catalog_configuration.component';

describe('Table5Component', () => {
  let component: Catalog_configurationComponent;
  let fixture: ComponentFixture<Catalog_configurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalog_configurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Catalog_configurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
