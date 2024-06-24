export interface Experience {
    id: number;

    title: string;
    company: string;
    location: string;

    date: ExpDate;

    responsibilities: string[];
}

export class ExpDate {
    private _datefrom: Date = Date.prototype;
    private _dateto: Date = Date.prototype;

    get from(): string {
        return this.getdate(this._datefrom);
    }

    get to(): string {
        return this.getdate(this._dateto);
    }

    get length(): string {
        let months: number = Math.ceil((this._dateto.getTime() - this._datefrom.getTime()) / 2592000 / 1000);
        let years: number = 0;

        while (months >= 12) {
            years++;
            months -= 12;
        }
 
        return ` ${years > 0 ? years + ' year': ''}${years > 1 ? 's': ''} ${years > 0 && months > 0 ? 'and' : ''} ${months > 0 ? months + ' month': ''}${months > 1 ? 's': ''} `;
    }

    getdate(input: Date): string {
        if (input.getFullYear() == new Date().getFullYear()
        && input.getMonth() == new Date().getMonth()) {
            return `Present`;
        }

        return `${input.toLocaleString('default', { month: 'long' })} ${input.getFullYear()}`;
    }

    constructor(from: Date,to: Date) {
        this._datefrom = from;
        this._dateto = to;
    }
}