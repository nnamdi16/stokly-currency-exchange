import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { OtherCurrencyExchangeRateConversionService } from './../../services/other-currency-exchange-rate-conversion.service';

@Component({
  selector: 'app-other-currency-exchange-rate-conversion',
  templateUrl: './other-currency-exchange-rate-conversion.component.html',
  styleUrls: ['./other-currency-exchange-rate-conversion.component.css']
})
export class OtherCurrencyExchangeRateConversionComponent implements OnInit {
  otherCurrencyExchangeRateConversion:ExchangeRate

  constructor(private otherCurrencyExchangeRateConversionService: OtherCurrencyExchangeRateConversionService) { }

  ngOnInit(): void {
    this.otherCurrencyExchangeRateConversion = new ExchangeRate();
    this.getOtherCurrencyExchangeRateData();
  }

  getOtherCurrencyExchangeRateData() {
    this.otherCurrencyExchangeRateConversionService.getOtherCurrencyExchangeRateConversion().subscribe(
      otherCurrencyExchangeRateConversion => {
        console.log(`Other currency Exchange Rate Conversion`, otherCurrencyExchangeRateConversion);
        this.otherCurrencyExchangeRateConversion = otherCurrencyExchangeRateConversion;
      }
    )
  }

}
