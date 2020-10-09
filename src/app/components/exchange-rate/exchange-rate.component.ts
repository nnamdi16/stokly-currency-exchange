import { ExchangeRateService } from './../../services/exchange-rate.service';
import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  latestExchangeRate : ExchangeRate;
  constructor(private exchangeRateService:ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getLatestExchangeRate().subscribe(latestExchangeRate => {
      console.log(latestExchangeRate);
      this.latestExchangeRate = latestExchangeRate;
    });
  }

}
