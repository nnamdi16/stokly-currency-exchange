
export class ExchangeRate {
    base : string;
    date : string;
    rates: Rate
}

class Rate {
    [props:string]:number
}