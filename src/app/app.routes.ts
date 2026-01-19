import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryPopulationComponent } from './countries/country-population.component';
import { LoginComponent } from './auth/login.component';
import { CountryEditComponent } from './countries/country-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent },
    { path: 'countrypopulation/:id', component: CountryPopulationComponent },
    { path: 'countryedit/:id', component: CountryEditComponent },
    { path: 'cities', component: CitiesComponent },
    { path: 'login', component: LoginComponent }

];
