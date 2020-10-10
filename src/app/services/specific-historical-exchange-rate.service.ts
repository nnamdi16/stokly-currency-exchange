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
export class SpecificHistoricalExchangeRateService {
  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/2010-01-12'
  constructor(private http:HttpClient) {}

  //Get specific - dates historical data
  getSpecificDaysHistoricalData():Observable<ExchangeRate>{
    return this.http.get<ExchangeRate>(this.exchangeRateUrl);
  }
}
