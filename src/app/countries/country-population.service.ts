import { effect, Injectable, input } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CountryPopulation } from './country-population';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryPopulationService {
  getPopulation(countryId: number) {
    let resource = httpResource<CountryPopulation>(() => `${environment.baseUrl}api/countries/population/${countryId}`);
    return resource.value;
  }

}
