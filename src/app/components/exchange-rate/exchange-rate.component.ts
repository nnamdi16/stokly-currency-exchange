import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { HistoricalExchangeRate } from 'src/app/models/HistoricalExchangeRate';
import { ExchangeRateService } from './../../services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  flag:string =''
  base ='';
  date='';
  symbols='';
  startDate:string ='';
  endDate:string = '';
  latest:string='latest';
  history:string='history';
  latestExchangeRate : ExchangeRate; 
  historicalExchangeRate : HistoricalExchangeRate;
  loading:boolean = false;
  errorMessage:Error;
  events: string[] = [];
  bsInlineValue = new Date();
  bsEndValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  form = new FormGroup({
    countryCode: new FormControl('',Validators.required),
    startDate: new FormControl(),
    endDate: new FormControl()
  });
  baseCurrency:string ='';
  conversionCurrency:string ='';
  valueToBeConverted:number;
  convertedExchangeResult:number;
  countryCode: string[] = [];
  index : number = 0;
  conversionType:string ='';
  conversionTypeList=['EXCHANGE_RATE_BY_CURRENCIES','HISTORICAL_EXCHANGE_RATE_BY_CURRENCY','SPECIFIC_CURRENCY_EXCHANGE_RATE', 'EXCHANGE_RATE_BY_DATE', 'RECENT_EXCHANGE_RATE_BY_CURRENCY'];

  constructor(private exchangeRateService:ExchangeRateService, public datePipe: DatePipe) {
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
   }

  ngOnInit(): void {
    this.latestExchangeRate = new ExchangeRate();
    this.historicalExchangeRate = new HistoricalExchangeRate();
    this.getLatestExchangeRate();
   
  }

  getMenuItem(event) {
    this.flag = event;
  }



  getLatestExchangeRate(){
    this.loading = true;
    this.errorMessage = new Error();
    this.exchangeRateService.getLatestExchangeRate(this.latest)
      .subscribe(latestExchangeRate => {
        console.log('Latest Exchange Rate',latestExchangeRate);
        this.latestExchangeRate = latestExchangeRate;
        this.countryCode = Object.keys(latestExchangeRate.rates);
        
        
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
      );
  }

  getHistoricalExchangeRate(){
    console.log(`Yea`,this.bsInlineRangeValue);
    let startDateInput = this.datePipe.transform(this.bsInlineRangeValue, 'yyyy-MM-dd');
    let endDateInput = this.datePipe.transform(this.bsEndValue, 'yyyy-MM-dd');
    this.startDate = startDateInput;
    this.endDate = endDateInput;
    this.loading = true;
    this.errorMessage = new Error();
    this.exchangeRateService.getHistoricalExchangeRate(this.history,this.startDate,this.endDate)
      .subscribe(
        historicalExchangeRate => {
        this.loading = false;
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

  get Forms() {
    return this.form.controls;
  }

  getOtherCurrencyExchangeRateConversion(){
    // let [baseCurrency,startDateInput,endDateInput] = Object.values(this.form.value);
    let [startDateInput,endDateInput] = [this.bsInlineRangeValue,this.bsEndValue];
    this.startDate  = this.datePipe.transform(startDateInput, 'yyyy-MM-dd');
    this.endDate = this.datePipe.transform(endDateInput, 'yyyy-MM-dd');
    this.loading = true;
    this.errorMessage = new Error();
    
    this.exchangeRateService.getOtherCurrencyExchangeRateConversion(this.history,this.startDate,this.endDate,this.baseCurrency)
      .subscribe(
        otherCurrencyExchangeRateConversion => {
          console.log(`Other currency Exchange Rate Conversion`, otherCurrencyExchangeRateConversion);
        this.historicalExchangeRate = otherCurrencyExchangeRateConversion;
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

  getSelectedCurrenciesExchangeRateData(){
    this.loading = true;
    this.errorMessage = new Error();
    this.exchangeRateService.getSelectedCurrenciesExchangeRateData(this.latest,this.symbols)
      .subscribe(
        otherCurrencyExchangeRateConversion => {
        console.log(`Selected Currencies Exchange Rate`, otherCurrencyExchangeRateConversion);
        this.latestExchangeRate = otherCurrencyExchangeRateConversion;
        
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

  getSelectedCurrenciesHistoricalExchangeRateData(){
    this.loading = true;
    this.errorMessage = new Error();
    this.exchangeRateService.getSelectedCurrenciesHistoricalExchangeRateData(this.history,this.startDate,this.endDate,this.symbols)
      .subscribe(
        selectedCurrenciesHistoricalExchangeRateData => {
        console.log(`Selected Currencies Historical Exchange Rate`, selectedCurrenciesHistoricalExchangeRateData);
        this.historicalExchangeRate = selectedCurrenciesHistoricalExchangeRateData;
        
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

  getSpecificCurrencyExchangeRate(){
    console.log(this.baseCurrency,this.conversionCurrency);
    this.loading = true;
    this.errorMessage = new Error();
    console.log(this.latest,this.base);
    this.exchangeRateService.getSpecificCurrencyExchangeRate(this.latest,this.baseCurrency)
      .subscribe(
        specificCurrencyExchangeRate => {
        console.log(`Specific Country Exchange Rate`, specificCurrencyExchangeRate);
        this.latestExchangeRate = specificCurrencyExchangeRate;
        this.getResponse(specificCurrencyExchangeRate)
        
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

  getResponse(exchangeRate:ExchangeRate) {
    console.log(exchangeRate);
    let conversionRate = exchangeRate.rates[this.conversionCurrency];
    console.log(conversionRate);
    let convertedValue = conversionRate * this.valueToBeConverted;
    this.convertedExchangeResult = convertedValue;

  }

  getSpecificDaysHistoricalData(){
    this.loading = true;
    this.errorMessage = new Error();
    this.exchangeRateService.getSpecificDaysHistoricalData(this.date)
      .subscribe(
        specificDateHistoricalExchangeRate => {
        console.log(`Specific Date Historical Data`, specificDateHistoricalExchangeRate);
        this.historicalExchangeRate = specificDateHistoricalExchangeRate;
        
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


  exchangeRateConversion() {
    this.loading = true;
    this.errorMessage = new Error();
    this.exchangeRateService.getSelectedCurrenciesExchangeRateData(this.latest,this.symbols)
      .subscribe(
        otherCurrencyExchangeRateConversion => {
        console.log(`Selected Currencies Exchange Rate`, otherCurrencyExchangeRateConversion);
        this.latestExchangeRate = otherCurrencyExchangeRateConversion;
        
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
