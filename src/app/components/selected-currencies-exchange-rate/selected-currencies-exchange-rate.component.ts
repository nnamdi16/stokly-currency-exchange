import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { SelectedCurrenciesExchangeRateService } from './../../services/selected-currencies-exchange-rate.service';

@Component({
  selector: 'app-selected-currencies-exchange-rate',
  templateUrl: './selected-currencies-exchange-rate.component.html',
  styleUrls: ['./selected-currencies-exchange-rate.component.css']
})
export class SelectedCurrenciesExchangeRateComponent implements OnInit {
  symbols:string = '';

  loading: boolean = false;
  errorMessage:any;
  currencyExchange:ExchangeRate;
  selectedCurrenciesExchangeRate:ExchangeRate;

  constructor(private selectedCurrenciesExchangeRateService:SelectedCurrenciesExchangeRateService) { }

  ngOnInit(): void {
    this.selectedCurrenciesExchangeRate = new ExchangeRate();
    this.getSelectedCurrenciesExchangeRateData();
  }

  public getSelectedCurrenciesExchangeRateData() {
    this.loading = true;
    this.errorMessage = '';
    this.selectedCurrenciesExchangeRateService.getSelectedCurrenciesExchangeRateData(this.symbols)
      .subscribe(
        (selectedCurrenciesExchangeRate) => {
          console.log('Response recieved');
          this.selectedCurrenciesExchangeRate = selectedCurrenciesExchangeRate;
          console.log(`Selected Currencies Exchange Rate`, selectedCurrenciesExchangeRate);
        },
        (error) => {
          console.log('Request failed with error');
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          console.log('Request Completed');
          this.loading = false;
        }
      )
      
  }

}
