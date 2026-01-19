import { Component, effect, inject, signal } from '@angular/core';
import { Country } from './country';
import { form, FormField, hidden, maxLength, minLength, submit } from '@angular/forms/signals';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-country-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormField,
    RouterLink
  ],
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.scss',
})
export class CountryEditComponent {
  countryModel = signal<Country >({
    id: 0,
    name: '',
    iso2: '',
    iso3: ''
  });
  countryForm = form(this.countryModel, (country) => {
    minLength(country.iso2, 2);
    maxLength(country.iso2, 2);
    minLength(country.iso3, 3);
    maxLength(country.iso3, 3);
    hidden(country.id, () => true);
  });

  private readonly countryService = inject(CountriesService);

    constructor(private activatedRoute: ActivatedRoute) {
      let idParam = this.activatedRoute.snapshot.paramMap.get('id');
      let countryId = idParam ? +idParam : 0;
      if (countryId > 0) {
        let resource = httpResource<Country>(() => 
          `${environment.baseUrl}api/countries/${countryId}`);
        // https://stackoverflow.com/questions/79850289/angular-signal-forms-with-resources
        effect(() => {
          if (resource.hasValue()) {
            this.countryModel.set(resource.value());
          }
        });
      }
    }

    onSubmit(event: Event): void {
      event.preventDefault();
      if (this.countryForm().valid()) {
        this.countryService.updateCountry(this.countryModel());
      }
    }
}
