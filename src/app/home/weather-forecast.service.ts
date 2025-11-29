import { httpResource } from '@angular/common/http';
import { effect, Injectable } from '@angular/core';
import { WeatherForecast } from './weather-forecast';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  readonly resource = httpResource<WeatherForecast[]>(() => `${environment.baseUrl}weatherforecast`);

  readonly forecasts = this.resource.value;
  readonly error = this.resource.error;

   constructor() { 
    effect(() => {
      if (this.error()) {
        console.error('Error loading products:', this.error());
      }
    });
  }
}
