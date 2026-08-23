import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayAnnouncement } from './barangay-announcement';

describe('BarangayAnnouncement', () => {
  let component: BarangayAnnouncement;
  let fixture: ComponentFixture<BarangayAnnouncement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangayAnnouncement],
    }).compileComponents();

    fixture = TestBed.createComponent(BarangayAnnouncement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
