import { httpResource } from '@angular/common/http';
import { effect, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  readonly resource = httpResource<Country[]>(() => `${environment.baseUrl}api/countries`);

  readonly countries = this.resource.value;
  readonly error = this.resource.error;

   constructor() { 
    effect(() => {
      if (this.error()) {
        console.error('Error loading countries:', this.error());
      }
    });
  }

}
