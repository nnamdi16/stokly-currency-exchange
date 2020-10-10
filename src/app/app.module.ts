import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { HistoricalExchangeRateComponent } from './components/historical-exchange-rate/historical-exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    HistoricalExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
