import { TestBed } from '@angular/core/testing';

import { ServicePreloaderService } from './service-preloader.service';

describe('ServicePreloaderService', () => {
  let service: ServicePreloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePreloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
