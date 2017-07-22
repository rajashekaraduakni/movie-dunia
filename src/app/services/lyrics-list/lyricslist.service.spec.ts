import { TestBed, inject } from '@angular/core/testing';

import { LyricslistService } from './lyricslist.service';

describe('LyricslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyricslistService]
    });
  });

  it('should be created', inject([LyricslistService], (service: LyricslistService) => {
    expect(service).toBeTruthy();
  }));
});
