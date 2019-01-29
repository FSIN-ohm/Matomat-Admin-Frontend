import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductsModalComponent } from './select-products-modal.component';

describe('SelectProductsModalComponent', () => {
  let component: SelectProductsModalComponent;
  let fixture: ComponentFixture<SelectProductsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProductsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
