import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalExchangeRate } from './../models/HistoricalExchangeRate';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class HistoricalExchangeRateService {

  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01';
  constructor(private http:HttpClient) { }

    // Get historical exchange rate
    getHistoricalExchangeRate(): Observable<HistoricalExchangeRate> {
      return this.http.get<HistoricalExchangeRate>(this.exchangeRateUrl);
    }
}
