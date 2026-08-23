import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementCards } from './announcement-cards';

describe('AnnouncementCards', () => {
  let component: AnnouncementCards;
  let fixture: ComponentFixture<AnnouncementCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementCards],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
