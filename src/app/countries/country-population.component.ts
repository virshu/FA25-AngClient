import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from './country-population';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss',
})
export class CountryPopulationComponent {
  population = signal<CountryPopulation | undefined>(undefined);

  constructor(private activatedRoute: ActivatedRoute) {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let countryId = idParam ? +idParam : -1;
    let resource = httpResource<CountryPopulation>(() => 
      `${environment.baseUrl}api/countries/population/${countryId}`);
    this.population = resource.value
  }
}
