import { Component, OnInit } from '@angular/core';
import { Error } from './../../models/Error';
import { HistoricalExchangeRate } from './../../models/HistoricalExchangeRate';
import { HistoricalExchangeRateService } from './../../services/historical-exchange-rate.service';

@Component({
  selector: 'app-historical-exchange-rate',
  templateUrl: './historical-exchange-rate.component.html',
  styleUrls: ['./historical-exchange-rate.component.css']
})
export class HistoricalExchangeRateComponent implements OnInit {
  startDate:string ='';
  endDate:string = '';
  historicalExchangeRate : HistoricalExchangeRate;
  loading:boolean = false;
  errorMessage:Error;

  constructor(private historicalexchangeRateService:HistoricalExchangeRateService) { }

  ngOnInit(): void {
    this.historicalExchangeRate = new HistoricalExchangeRate();
  }

  getHistoricalExchangeRate(){
    this.loading = true;
    this.errorMessage = new Error();
    this.historicalexchangeRateService.getHistoricalExchangeRate(this.startDate,this.endDate)
      .subscribe(
        historicalExchangeRate => {
        console.log('Historical Exchange Rate',historicalExchangeRate);
        this.historicalExchangeRate = historicalExchangeRate;
        
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
