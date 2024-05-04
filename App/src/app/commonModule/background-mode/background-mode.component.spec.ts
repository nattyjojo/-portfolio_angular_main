import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundModeComponent } from './background-mode.component';

describe('BackgroundModeComponent', () => {
  let component: BackgroundModeComponent;
  let fixture: ComponentFixture<BackgroundModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
