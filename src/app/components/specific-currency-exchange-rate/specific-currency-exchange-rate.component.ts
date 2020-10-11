import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { SpecificCurrencyExchangeRateService } from './../../services/specific-currency-exchange-rate.service';

@Component({
  selector: 'app-specific-currency-exchange-rate',
  templateUrl: './specific-currency-exchange-rate.component.html',
  styleUrls: ['./specific-currency-exchange-rate.component.css']
})
export class SpecificCurrencyExchangeRateComponent implements OnInit {
  specificCurrencyExchangeRate: ExchangeRate;

  constructor(private specificCurrencyExchangeRateService:SpecificCurrencyExchangeRateService) { }

  ngOnInit(): void {
    this.specificCurrencyExchangeRate = new ExchangeRate();
    this.getSpecificCurrencyExchangeRate();
  }

  getSpecificCurrencyExchangeRate() {
    this.specificCurrencyExchangeRateService.getSpecificCurrencyExchangeRate().subscribe(specificCurrencyExchangeRate => {
      console.log( `Specific Country Exchange Rate`, specificCurrencyExchangeRate);
      this.specificCurrencyExchangeRate = specificCurrencyExchangeRate;
    });
   
  }

}
