import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiDashboardPageComponent } from './admi-dashboard-page.component';

describe('AdmiDashboardPageComponent', () => {
  let component: AdmiDashboardPageComponent;
  let fixture: ComponentFixture<AdmiDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
