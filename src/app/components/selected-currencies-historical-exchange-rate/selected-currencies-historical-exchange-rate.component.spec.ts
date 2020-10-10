import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCurrenciesHistoricalExchangeRateComponent } from './selected-currencies-historical-exchange-rate.component';

describe('SelectedCurrenciesHistoricalExchangeRateComponent', () => {
  let component: SelectedCurrenciesHistoricalExchangeRateComponent;
  let fixture: ComponentFixture<SelectedCurrenciesHistoricalExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCurrenciesHistoricalExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCurrenciesHistoricalExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
