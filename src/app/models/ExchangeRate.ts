
export class ExchangeRate {
    base : string;
    date : string;
    rates: Rate
}

export class Rate {
    [props:string]:number
}