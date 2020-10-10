import { TestBed } from '@angular/core/testing';

import { HistoricalExchangeRateService } from './historical-exchange-rate.service';

describe('HistoricalExchangeRateService', () => {
  let service: HistoricalExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
