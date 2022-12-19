import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueDashboardPageComponent } from './true-dashboard-page.component';

describe('TrueDashboardPageComponent', () => {
  let component: TrueDashboardPageComponent;
  let fixture: ComponentFixture<TrueDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
