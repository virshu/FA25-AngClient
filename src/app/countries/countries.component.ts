import { Component, inject } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  #countriesService = inject(CountriesService);

  readonly countries = this.#countriesService.countries;
}
