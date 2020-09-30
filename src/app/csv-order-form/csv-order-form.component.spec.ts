import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvOrderFormComponent } from './csv-order-form.component';

describe('CsvOrderFormComponent', () => {
  let component: CsvOrderFormComponent;
  let fixture: ComponentFixture<CsvOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
