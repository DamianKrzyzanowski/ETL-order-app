import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlOrderFormComponent } from './sql-order-form.component';

describe('SqlOrderFormComponent', () => {
  let component: SqlOrderFormComponent;
  let fixture: ComponentFixture<SqlOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
