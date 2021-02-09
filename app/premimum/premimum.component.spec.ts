import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremimumComponent } from './premimum.component';

describe('PremimumComponent', () => {
  let component: PremimumComponent;
  let fixture: ComponentFixture<PremimumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremimumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
