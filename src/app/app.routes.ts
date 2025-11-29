import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryPopulationComponent } from './countries/country-population.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent },
    { path: 'countrypopulation/:id', component: CountryPopulationComponent },
    { path: 'cities', component: CitiesComponent }    
];
