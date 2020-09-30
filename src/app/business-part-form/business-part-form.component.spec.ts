import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartFormComponent } from './business-part-form.component';

describe('BusinessPartFormComponent', () => {
  let component: BusinessPartFormComponent;
  let fixture: ComponentFixture<BusinessPartFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
