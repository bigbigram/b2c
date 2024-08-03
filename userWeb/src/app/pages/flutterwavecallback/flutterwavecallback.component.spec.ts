
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterwavecallbackComponent } from './flutterwavecallback.component';

describe('FlutterwavecallbackComponent', () => {
  let component: FlutterwavecallbackComponent;
  let fixture: ComponentFixture<FlutterwavecallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlutterwavecallbackComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlutterwavecallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
