import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkAnnouncement } from './sk-announcement';

describe('SkAnnouncement', () => {
  let component: SkAnnouncement;
  let fixture: ComponentFixture<SkAnnouncement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkAnnouncement],
    }).compileComponents();

    fixture = TestBed.createComponent(SkAnnouncement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
