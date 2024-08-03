
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstamojocallbackComponent } from './instamojocallback.component';

describe('InstamojocallbackComponent', () => {
  let component: InstamojocallbackComponent;
  let fixture: ComponentFixture<InstamojocallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstamojocallbackComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstamojocallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
