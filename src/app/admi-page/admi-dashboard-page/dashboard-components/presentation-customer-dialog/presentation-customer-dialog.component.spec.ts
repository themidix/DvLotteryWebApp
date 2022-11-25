import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCustomerDialogComponent } from './presentation-customer-dialog.component';

describe('PresentationCustomerDialogComponent', () => {
  let component: PresentationCustomerDialogComponent;
  let fixture: ComponentFixture<PresentationCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCustomerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
