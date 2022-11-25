import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiRegisterPageComponent } from './admi-register-page.component';

describe('AdmiRegisterPageComponent', () => {
  let component: AdmiRegisterPageComponent;
  let fixture: ComponentFixture<AdmiRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
