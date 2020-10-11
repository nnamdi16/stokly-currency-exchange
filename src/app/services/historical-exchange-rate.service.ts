import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  baseUrl = `https://api.exchangeratesapi.io/history`;
  exchangeRateUrl : string = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01';
  constructor(private http:HttpClient) { }

    // Get historical exchange rate
    getHistoricalExchangeRate(startDate:string,endDate:string): Observable<HistoricalExchangeRate> {
      let params = new HttpParams()
        .set('start_at',startDate)
        .set('end_at',endDate);
      
      console.log(params.toString);
      return this.http.get<HistoricalExchangeRate>(this.baseUrl,{params});
    }
}
