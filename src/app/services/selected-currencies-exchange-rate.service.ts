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
export class SelectedCurrenciesExchangeRateService {
  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP';
  constructor(private http:HttpClient) {}

   //Get selected currencies exchange rate
   getSelectedCurrenciesExchangeRateData():Observable<ExchangeRate>{
    return this.http.get<ExchangeRate>(this.exchangeRateUrl);
  }
}
