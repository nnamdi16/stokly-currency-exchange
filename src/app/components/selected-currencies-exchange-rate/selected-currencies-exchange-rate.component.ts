import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { SelectedCurrenciesExchangeRateService } from './../../services/selected-currencies-exchange-rate.service';

@Component({
  selector: 'app-selected-currencies-exchange-rate',
  templateUrl: './selected-currencies-exchange-rate.component.html',
  styleUrls: ['./selected-currencies-exchange-rate.component.css']
})
export class SelectedCurrenciesExchangeRateComponent implements OnInit {
  selectedCurrenciesExchangeRate:ExchangeRate;

  constructor(private selectedCurrenciesExchangeRateService:SelectedCurrenciesExchangeRateService) { }

  ngOnInit(): void {
    this.selectedCurrenciesExchangeRate = new ExchangeRate();
    this.getSelectedCurrenciesExchangeRateData();
  }

  getSelectedCurrenciesExchangeRateData(){
    this.selectedCurrenciesExchangeRateService.getSelectedCurrenciesExchangeRateData().subscribe(selectedCurrenciesExchangeRate => {
      console.log(`Selected Currencies Exchange Rate`, selectedCurrenciesExchangeRate);
      this.selectedCurrenciesExchangeRate = selectedCurrenciesExchangeRate;
    });
  }

}
