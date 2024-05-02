import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorTextComponent } from './anchor-text.component';

describe('AnchorTextComponent', () => {
  let component: AnchorTextComponent;
  let fixture: ComponentFixture<AnchorTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchorTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnchorTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
