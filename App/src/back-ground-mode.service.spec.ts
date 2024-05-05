import { TestBed } from '@angular/core/testing';

import { BackGroundModeService } from './back-ground-mode.service';

describe('BackGroundModeService', () => {
  let service: BackGroundModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackGroundModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
