import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/latest';
  constructor(private http:HttpClient) { }

  // Get latest exchange rate
  getLatestExchangeRate(): Observable<ExchangeRate> {
    return this.http.get<ExchangeRate>(this.exchangeRateUrl);
  }
}
