import { TestBed } from '@angular/core/testing';

import { FundsService } from './funds.service';

describe('FundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundsService = TestBed.get(FundsService);
    expect(service).toBeTruthy();
  });
});
