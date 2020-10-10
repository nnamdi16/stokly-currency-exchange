import { TestBed } from '@angular/core/testing';

import { SpecificCurrencyExchangeRateService } from './specific-currency-exchange-rate.service';

describe('SpecificCurrencyExchangeRateService', () => {
  let service: SpecificCurrencyExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificCurrencyExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
