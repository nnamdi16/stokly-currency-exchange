import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCurrencyExchangeRateComponent } from './specific-currency-exchange-rate.component';

describe('SpecificCurrencyExchangeRateComponent', () => {
  let component: SpecificCurrencyExchangeRateComponent;
  let fixture: ComponentFixture<SpecificCurrencyExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificCurrencyExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCurrencyExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
