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
export class SpecificCurrencyExchangeRateService {

  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/latest?base=USD';
  constructor(private http:HttpClient) {}

  //Get specific - dates histrical data
  getSpecificCurrencyExchangeRate():Observable<ExchangeRate>{
    return this.http.get<ExchangeRate>(this.exchangeRateUrl);
  }
}
