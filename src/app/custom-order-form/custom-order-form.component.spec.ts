import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderFormComponent } from './custom-order-form.component';

describe('CustomOrderFormComponent', () => {
  let component: CustomOrderFormComponent;
  let fixture: ComponentFixture<CustomOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
