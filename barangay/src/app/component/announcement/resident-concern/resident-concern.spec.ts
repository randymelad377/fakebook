import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentConcern } from './resident-concern';

describe('ResidentConcern', () => {
  let component: ResidentConcern;
  let fixture: ComponentFixture<ResidentConcern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentConcern],
    }).compileComponents();

    fixture = TestBed.createComponent(ResidentConcern);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
