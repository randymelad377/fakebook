import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAside } from './right-aside';

describe('RightAside', () => {
  let component: RightAside;
  let fixture: ComponentFixture<RightAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightAside],
    }).compileComponents();

    fixture = TestBed.createComponent(RightAside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
