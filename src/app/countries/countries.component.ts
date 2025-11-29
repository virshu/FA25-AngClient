import { Component, inject } from '@angular/core';
import { CountriesService } from './countries.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries',
  imports: [RouterLink],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  #countriesService = inject(CountriesService);

  readonly countries = this.#countriesService.countries;
}
