import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAgentDialogComponent } from './register-agent-dialog.component';

describe('RegisterAgentDialogComponent', () => {
  let component: RegisterAgentDialogComponent;
  let fixture: ComponentFixture<RegisterAgentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAgentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAgentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
