import { TestBed } from '@angular/core/testing';

import { LocaliteService } from './localite.service';

describe('LocaliteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaliteService = TestBed.get(LocaliteService);
    expect(service).toBeTruthy();
  });
});
