import { Component, inject, input, signal } from '@angular/core';
import { CountryPopulationService } from './country-population.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from './country-population';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss',
})
export class CountryPopulationComponent {
  #countryPopulationService = inject(CountryPopulationService);
  population = signal<CountryPopulation | undefined>(undefined);

  constructor(private activatedRoute: ActivatedRoute) {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let countryId = idParam ? +idParam : -1;
    this.population = this.#countryPopulationService.getPopulation(countryId);
  }
}
