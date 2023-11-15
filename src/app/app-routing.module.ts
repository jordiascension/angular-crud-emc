
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';
import { PeliculaDetailsComponent } from './components/pelicula-details/pelicula-details.component';
import { AddPeliculaComponent } from './components/add-pelicula/add-pelicula.component';


const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  { path: 'peliculas', component: PeliculaListComponent },
  { path: 'peliculas/:id', component: PeliculaDetailsComponent },
  { path: 'agregar', component: AddPeliculaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
