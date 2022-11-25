import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiPageComponent } from './admi-page.component';

describe('AdmiPageComponent', () => {
  let component: AdmiPageComponent;
  let fixture: ComponentFixture<AdmiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
