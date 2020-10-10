import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRate } from '../models/ExchangeRate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class OtherCurrencyExchangeRateConversionService {
  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=USD'
  constructor(private http:HttpClient) {}

  //Get specific - dates historical data
  getOtherCurrencyExchangeRateConversion():Observable<ExchangeRate>{
    return this.http.get<ExchangeRate>(this.exchangeRateUrl);
  }
}
