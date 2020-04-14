export class Country {
    public name: string;

    public constructor(init?: Partial<Country>) {
        Object.assign(this, init);
    }
}

