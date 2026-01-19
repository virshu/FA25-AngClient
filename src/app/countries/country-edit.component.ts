import { Component, effect, signal } from '@angular/core';
import { Country } from './country';
import { form, FormField } from '@angular/forms/signals';
import { ActivatedRoute } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-country-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormField],
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
  countryForm = form(this.countryModel);

    constructor(private activatedRoute: ActivatedRoute) {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let countryId = idParam ? +idParam : -1;
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
