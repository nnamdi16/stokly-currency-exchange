import { SpecificHistoricalExchangeRateService } from './../../services/specific-historical-exchange-rate.service';
import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';

@Component({
  selector: 'app-specific-historical-exchange-rate',
  templateUrl: './specific-historical-exchange-rate.component.html',
  styleUrls: ['./specific-historical-exchange-rate.component.css']
})
export class SpecificHistoricalExchangeRateComponent implements OnInit {
  specificDateHistoricalExchangeRate: ExchangeRate;


  constructor(private specificDateHistoricalExchangeRateService:SpecificHistoricalExchangeRateService) { }

  ngOnInit(): void {
    this.specificDateHistoricalExchangeRate = new ExchangeRate();
    this.getSpecificDateHistoricalExchangeRateData();
  }

  getSpecificDateHistoricalExchangeRateData(){
    this.specificDateHistoricalExchangeRateService.getSpecificDaysHistoricalData().subscribe(specificDateHistoricalExchangeRate =>{
      console.log(`Specific Date Historical Data`, specificDateHistoricalExchangeRate);
      this.specificDateHistoricalExchangeRate = specificDateHistoricalExchangeRate
    })
  }

}
