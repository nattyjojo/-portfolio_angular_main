import { TestBed } from '@angular/core/testing';

import { ClickNotifierService } from './click-notifier.service';

describe('ClickNotifierService', () => {
  let service: ClickNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
