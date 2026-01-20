import { effect, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { httpResource } from '@angular/common/http';
import { City } from './city';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  readonly resource = httpResource<City[]>(() => `${environment.baseUrl}api/cities`);
  citiesInCountry = signal<City[] | undefined>(undefined);

  readonly cities = this.resource.value;
  readonly error = this.resource.error;
  //private countryId = 0;

   getCitiesInCountry(countryId: number) { 
    let citiesInCountryResource = httpResource<City[]>(() => `${environment.baseUrl}api/cities/country/${countryId}`);
    this.citiesInCountry = citiesInCountryResource.value;
    effect(() => {
      if (this.error()) {
        console.error('Error loading cities:', this.error());
      }
    });
  }
  
}
