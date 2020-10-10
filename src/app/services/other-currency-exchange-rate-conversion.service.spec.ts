import { TestBed } from '@angular/core/testing';

import { OtherCurrencyExchangeRateConversionService } from './other-currency-exchange-rate-conversion.service';

describe('OtherCurrencyExchangeRateConversionService', () => {
  let service: OtherCurrencyExchangeRateConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherCurrencyExchangeRateConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
