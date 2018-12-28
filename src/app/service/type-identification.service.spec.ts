import { TestBed } from '@angular/core/testing';

import { TypeIdentificationService } from './type-identification.service';

describe('TypeIdentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeIdentificationService = TestBed.get(TypeIdentificationService);
    expect(service).toBeTruthy();
  });
});
