import { HistoricalExchangeRate } from './../../models/HistoricalExchangeRate';
import { Component, OnInit } from '@angular/core';
import { HistoricalExchangeRateService } from './../../services/historical-exchange-rate.service';

@Component({
  selector: 'app-historical-exchange-rate',
  templateUrl: './historical-exchange-rate.component.html',
  styleUrls: ['./historical-exchange-rate.component.css']
})
export class HistoricalExchangeRateComponent implements OnInit {
  historicalExchangeRate : HistoricalExchangeRate;

  constructor(private historicalexchangeRateService:HistoricalExchangeRateService) { }

  ngOnInit(): void {
    this.historicalExchangeRate = new HistoricalExchangeRate();
    this.getHistoricalExchangeRate();
  }

  getHistoricalExchangeRate(){
    this.historicalexchangeRateService.getHistoricalExchangeRate().subscribe(historicalExchangeRate => {
      console.log('Historical Exchange Rate',historicalExchangeRate);
      this.historicalExchangeRate = historicalExchangeRate;
    })

  }

}
