
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePopupComponent } from './manage-popup.component';

describe('ManagePopupComponent', () => {
  let component: ManagePopupComponent;
  let fixture: ComponentFixture<ManagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagePopupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ManagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
