import { SelectedCurrenciesHistoricalExchangeRateService } from './../../services/selected-currencies-historical-exchange-rate.service';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-currencies-historical-exchange-rate',
  templateUrl: './selected-currencies-historical-exchange-rate.component.html',
  styleUrls: ['./selected-currencies-historical-exchange-rate.component.css']
})
export class SelectedCurrenciesHistoricalExchangeRateComponent implements OnInit {
  selectedCurrenciesHistoricalExchangeRate:ExchangeRate;

  constructor(private selectedCurrenciesHistoricalExchangeRateService:SelectedCurrenciesHistoricalExchangeRateService) { }

  ngOnInit(): void {
    this.selectedCurrenciesHistoricalExchangeRate = new ExchangeRate();
    this.getSelectedCurrenciesHistoricalExchangeRateData();
  }

  getSelectedCurrenciesHistoricalExchangeRateData(){
    this.selectedCurrenciesHistoricalExchangeRateService.getSelectedCurrenciesHistoricalExchangeRateData().subscribe(selectedCurrenciesHistoricalExchangeRate =>{
      console.log(`Selected Currencies Historical Exchange Rate`, selectedCurrenciesHistoricalExchangeRate);
      this.selectedCurrenciesHistoricalExchangeRate = selectedCurrenciesHistoricalExchangeRate
    })
  }

}
