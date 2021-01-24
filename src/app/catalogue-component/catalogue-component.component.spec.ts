import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueComponentComponent } from './catalogue-component.component';

describe('CatalogueComponentComponent', () => {
  let component: CatalogueComponentComponent;
  let fixture: ComponentFixture<CatalogueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
