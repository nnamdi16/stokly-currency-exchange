import { TestBed } from '@angular/core/testing';

import { SelectedCurrenciesExchangeRateService } from './selected-currencies-exchange-rate.service';

describe('SelectedCurrenciesExchangeRateService', () => {
  let service: SelectedCurrenciesExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCurrenciesExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
