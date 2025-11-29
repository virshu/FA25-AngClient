import { Component, inject } from '@angular/core';
import { CitiesService } from './cities.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cities',
  imports: [
     MatTableModule,
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss',
})
export class CitiesComponent {
  #citiesService = inject(CitiesService);
  readonly cities = this.#citiesService.cities;

  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon', 'country'];
}
