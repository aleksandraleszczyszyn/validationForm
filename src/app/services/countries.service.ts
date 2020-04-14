import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { City } from '../models/City';

@Injectable()
export class CountriesService {

    public getCountries(): Country[] {
        return this.getMockedCountries();
    }

    private getMockedCountries(): Country[] {
        let countries: Country[] = [
            new Country({
                name: 'Poland'
            }),
            new Country({
                name: 'Guatemala'
            }),
            new Country({
                name: 'Cabo Verde'
            })
        ];
        return countries;
    }

    public getCitiesByCountryName(countryCode: string): City[] {
        const cities: City[] = this.getMockedCities();
        const filteredCities: City[] = cities.filter(c => c.countryName === countryCode);
        return filteredCities;
     }

    private getMockedCities(): City[] {
        let cities: City[] = [
            new City({
                name: 'Wroclaw',
                countryName: 'Poland'
            }),
            new City({
                name: 'Warszawa',
                countryName: 'Poland'
            }),
            new City({
                name: 'Guatemala City',
                countryName: 'Guatemala'
            }),
            new City({
                name: 'Panajachel',
                countryName: 'Guatemala'
            }),
            new City({
                name: 'Praia',
                countryName: 'Cabo Verde'
            }),
            new City({
                name: 'Santa Maria',
                countryName: 'Cabo Verde'
            })
        ];
        return cities;
    }
}

