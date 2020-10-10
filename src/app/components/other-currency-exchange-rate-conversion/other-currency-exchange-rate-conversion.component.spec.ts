import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCurrencyExchangeRateConversionComponent } from './other-currency-exchange-rate-conversion.component';

describe('OtherCurrencyExchangeRateConversionComponent', () => {
  let component: OtherCurrencyExchangeRateConversionComponent;
  let fixture: ComponentFixture<OtherCurrencyExchangeRateConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCurrencyExchangeRateConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCurrencyExchangeRateConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
