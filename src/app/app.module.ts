import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { HistoricalExchangeRateComponent } from './components/historical-exchange-rate/historical-exchange-rate.component';
import { OtherCurrencyExchangeRateConversionComponent } from './components/other-currency-exchange-rate-conversion/other-currency-exchange-rate-conversion.component';
import { SelectedCurrenciesExchangeRateComponent } from './components/selected-currencies-exchange-rate/selected-currencies-exchange-rate.component';
import { SelectedCurrenciesHistoricalExchangeRateComponent } from './components/selected-currencies-historical-exchange-rate/selected-currencies-historical-exchange-rate.component';
import { SpecificCurrencyExchangeRateComponent } from './components/specific-currency-exchange-rate/specific-currency-exchange-rate.component';
import { SpecificHistoricalExchangeRateComponent } from './components/specific-historical-exchange-rate/specific-historical-exchange-rate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    HistoricalExchangeRateComponent,
    SpecificHistoricalExchangeRateComponent,
    SpecificCurrencyExchangeRateComponent,
    SelectedCurrenciesExchangeRateComponent,
    SelectedCurrenciesHistoricalExchangeRateComponent,
    OtherCurrencyExchangeRateConversionComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    DatepickerModule,
    ReactiveFormsModule
    

    
 
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
