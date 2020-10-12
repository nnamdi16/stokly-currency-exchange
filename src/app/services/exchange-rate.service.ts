import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalExchangeRate } from '../models/HistoricalExchangeRate';
import { ExchangeRate } from './../models/ExchangeRate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/';
  constructor(private http:HttpClient) { }

  // Get latest exchange rate
  getLatestExchangeRate(latest:string): Observable<ExchangeRate> {
    return this.http.get<ExchangeRate>(this.exchangeRateUrl + latest);
  }

   // Get historical exchange rate
   getHistoricalExchangeRate(history:string, startDate:string,endDate:string): Observable<HistoricalExchangeRate> {
    let params = new HttpParams()
      .set('start_at',startDate)
      .set('end_at',endDate);
    return this.http.get<HistoricalExchangeRate>(this.exchangeRateUrl + history,{params});
  }

   //Get other currency exchange rate  - dates historical data
  getOtherCurrencyExchangeRateConversion(history:string, startDate:string,endDate:string,base:string):Observable<HistoricalExchangeRate>{
    let params = new HttpParams()
    .set('start_at',startDate)
    .set('end_at',endDate)
    .set('base',base);
    return this.http.get<HistoricalExchangeRate>(this.exchangeRateUrl + history,{params});
  }

  // Get selected Currencies Exchange Rate
  getSelectedCurrenciesExchangeRateData(latest:string,symbols:string):Observable<ExchangeRate> {
    console.log(symbols);
    let currencyArray = symbols.split(',')
    console.log(currencyArray);
    let currencies = currencyArray.join();
    console.log(currencies);
    let params = new HttpParams()
    .set('symbols',currencies);
    return this.http.get<ExchangeRate>(this.exchangeRateUrl+latest, {params});
  }

   // Get selected Currencies Historical Exchange Rate
  getSelectedCurrenciesHistoricalExchangeRateData(history:string, startDate:string,endDate:string,symbols:string):Observable<HistoricalExchangeRate>{
    console.log(symbols);
    let currencyArray = symbols.split(',')
    console.log(currencyArray);
    let currencies = currencyArray.join();
    console.log(currencies);
    let params = new HttpParams()
    .set('start_at',startDate)
    .set('end_at',endDate)
    .set('symbols',currencies);
    return this.http.get<HistoricalExchangeRate>(this.exchangeRateUrl+history,{params});
  }

    //Get specific - dates histrical data
    getSpecificCurrencyExchangeRate(latest:string,base:string):Observable<ExchangeRate>{
      console.log(`The main base`,base);
      let params = new HttpParams()
        .set('base',base);
      return this.http.get<ExchangeRate>(this.exchangeRateUrl + latest, {params});

    }

      //Get specific - dates historical data
  getSpecificDaysHistoricalData(date:string):Observable<HistoricalExchangeRate>{
    return this.http.get<HistoricalExchangeRate>(this.exchangeRateUrl + date);
  }


}
