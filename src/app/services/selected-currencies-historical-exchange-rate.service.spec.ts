import { TestBed } from '@angular/core/testing';

import { SelectedCurrenciesHistoricalExchangeRateService } from './selected-currencies-historical-exchange-rate.service';

describe('SelectedCurrenciesHistoricalExchangeRateService', () => {
  let service: SelectedCurrenciesHistoricalExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCurrenciesHistoricalExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
