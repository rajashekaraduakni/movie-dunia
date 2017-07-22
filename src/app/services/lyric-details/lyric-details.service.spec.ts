import { TestBed, inject } from '@angular/core/testing';

import { LyricDetailsService } from './lyric-details.service';

describe('LyricDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyricDetailsService]
    });
  });

  it('should be created', inject([LyricDetailsService], (service: LyricDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
