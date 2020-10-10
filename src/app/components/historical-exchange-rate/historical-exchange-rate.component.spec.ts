import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalExchangeRateComponent } from './historical-exchange-rate.component';

describe('HistoricalExchangeRateComponent', () => {
  let component: HistoricalExchangeRateComponent;
  let fixture: ComponentFixture<HistoricalExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
