import { TestBed } from '@angular/core/testing';

import { AnnouncementSearch } from './announcement-search';

describe('AnnouncementSearch', () => {
  let service: AnnouncementSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
