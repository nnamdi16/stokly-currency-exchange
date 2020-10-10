import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { ExchangeRateService } from './../../services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  latestExchangeRate : ExchangeRate;
  constructor(private exchangeRateService:ExchangeRateService) { }

  ngOnInit(): void {
    this.latestExchangeRate = new ExchangeRate();

    this.getLatestExchangeRate();
   
  }

  getLatestExchangeRate(){
    this.exchangeRateService.getLatestExchangeRate().subscribe(latestExchangeRate => {
      console.log('Latest Exchange Rate',latestExchangeRate);
      this.latestExchangeRate = latestExchangeRate;
    });
  }

}
