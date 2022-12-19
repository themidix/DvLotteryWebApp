import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiCustomerTablePageComponent } from './admi-customer-table-page.component';

describe('AdmiCustomerTablePageComponent', () => {
  let component: AdmiCustomerTablePageComponent;
  let fixture: ComponentFixture<AdmiCustomerTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiCustomerTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiCustomerTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
