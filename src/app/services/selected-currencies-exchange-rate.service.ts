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
  baseUrl = 'https://api.exchangeratesapi.io/latest?symbols='

  constructor(private http:HttpClient) {}

  getSelectedCurrenciesExchangeRateData(symbols:string):Observable<ExchangeRate> {
    console.log(symbols);
    let currencyArray = symbols.split(',')
    console.log(currencyArray);
    let currencies = currencyArray.join();
    console.log(currencies);
    return this.http.get<ExchangeRate>(this.baseUrl + currencies);
  }
}
