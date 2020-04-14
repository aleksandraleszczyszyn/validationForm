export class City {
    public name: string;
    public countryName: string;

    public constructor(init?: Partial<City>) {
        Object.assign(this, init);
    }
}
