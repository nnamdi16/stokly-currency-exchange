import { Rate } from './ExchangeRate';
export class HistoricalExchangeRate {
    base:string;
    end_at:string;
    start_at:string;
    rates:HistoricalData

}

class HistoricalData {
    [props:string] : Rate
}