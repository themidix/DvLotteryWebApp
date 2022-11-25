import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiLoginPageComponent } from './admi-login-page.component';

describe('AdmiLoginPageComponent', () => {
  let component: AdmiLoginPageComponent;
  let fixture: ComponentFixture<AdmiLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
