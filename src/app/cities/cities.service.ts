import { effect, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { httpResource } from '@angular/common/http';
import { City } from './city';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  readonly resource = httpResource<City[]>(() => `${environment.baseUrl}api/cities`);

  readonly cities = this.resource.value;
  readonly error = this.resource.error;

   constructor() { 
    effect(() => {
      if (this.error()) {
        console.error('Error loading cities:', this.error());
      }
    });
  }
  
}
