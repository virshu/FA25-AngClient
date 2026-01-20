import { Component, inject, signal } from '@angular/core';
import { CitiesService } from './cities.service';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { City } from './city';

@Component({
  selector: 'app-cities-in-country',
  imports: [MatTableModule],
  templateUrl: './cities-in-country.component.html',
  styleUrl: './cities-in-country.component.scss',
})
export class CitiesInCountryComponent {
  #citiesService = inject(CitiesService);
  readonly cities = signal<City[] | undefined>(undefined);
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];

  constructor(private activatedRoute: ActivatedRoute) {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let countryId = idParam ? +idParam : 0;
    this.#citiesService.getCitiesInCountry(countryId);
    this.cities = this.#citiesService.citiesInCountry;
  }
  
}
