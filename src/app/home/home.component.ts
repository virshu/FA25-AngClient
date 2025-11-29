import { Component, inject } from '@angular/core';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  #weatherForecastService = inject(WeatherForecastService);

  forecasts = this.#weatherForecastService.forecasts;
}
