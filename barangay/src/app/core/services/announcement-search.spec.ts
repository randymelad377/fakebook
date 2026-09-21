import { TestBed } from '@angular/core/testing';

import { AnnouncementSearchService } from './announcement-search';

describe('AnnouncementSearchService', () => {
  let service: AnnouncementSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AnnouncementSearchService] });
    service = TestBed.inject(AnnouncementSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
