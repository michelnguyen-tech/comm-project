import { TestBed } from '@angular/core/testing';

import { DarkAreaService } from './dark-area.service';

describe('DarkAreaService', () => {
  let service: DarkAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
