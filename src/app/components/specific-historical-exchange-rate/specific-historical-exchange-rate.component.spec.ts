import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificHistoricalExchangeRateComponent } from './specific-historical-exchange-rate.component';

describe('SpecificHistoricalExchangeRateComponent', () => {
  let component: SpecificHistoricalExchangeRateComponent;
  let fixture: ComponentFixture<SpecificHistoricalExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificHistoricalExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificHistoricalExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
