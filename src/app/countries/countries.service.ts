import { HttpClient, httpResource } from '@angular/common/http';
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

  constructor(private http: HttpClient) { 
    effect(() => {
      if (this.error()) {
        console.error('Error loading countries:', this.error());
      }
    });
  }

  updateCountry(country: Country): void {
    if (country.id === 0) {
      this.http.post<Country>(`${environment.baseUrl}api/countries`, country).subscribe({
        next: (createdCountry) => {
          console.log('Country created successfully:', createdCountry);
        },
        error: (error) => {
          console.error('Error creating country:', error);
        }
      });
    } else {
      // Implementation for updating a country
      this.http.put<Country>(`${environment.baseUrl}api/countries/${country.id}`, country).subscribe({
        next: (updatedCountry) => {
          console.log('Country updated successfully:', updatedCountry);
        },
        error: (error) => {
          console.error('Error updating country:', error);
        }
      });
      console.log('Updating country:', country);
    }
  }

}
