
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrantorComponent } from './administrantor.component';

describe('AdministrantorComponent', () => {
  let component: AdministrantorComponent;
  let fixture: ComponentFixture<AdministrantorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministrantorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdministrantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
