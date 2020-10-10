import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCurrenciesExchangeRateComponent } from './selected-currencies-exchange-rate.component';

describe('SelectedCurrenciesExchangeRateComponent', () => {
  let component: SelectedCurrenciesExchangeRateComponent;
  let fixture: ComponentFixture<SelectedCurrenciesExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCurrenciesExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCurrenciesExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
