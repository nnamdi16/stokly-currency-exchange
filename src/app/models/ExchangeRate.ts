import { Type } from '@angular/compiler';


export class ExchangeRate {
    base : string;
    date : string;
    rates: Rate
}

class Rate {
    [props:string]:number
}