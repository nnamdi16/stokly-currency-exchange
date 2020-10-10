import { TestBed } from '@angular/core/testing';

import { SpecificHistoricalExchangeRateService } from './specific-historical-exchange-rate.service';

describe('SpecificHistoricalExchangeRateService', () => {
  let service: SpecificHistoricalExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificHistoricalExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
