import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepointOrderFormComponent } from './sharepoint-order-form.component';

describe('SharepointOrderFormComponent', () => {
  let component: SharepointOrderFormComponent;
  let fixture: ComponentFixture<SharepointOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepointOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepointOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
