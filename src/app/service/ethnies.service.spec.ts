import { TestBed } from '@angular/core/testing';

import { EthniesService } from './ethnies.service';

describe('EthniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EthniesService = TestBed.get(EthniesService);
    expect(service).toBeTruthy();
  });
});
