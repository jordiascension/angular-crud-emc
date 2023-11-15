import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPeliculaComponent } from './components/add-pelicula/add-pelicula.component';
import { PeliculaDetailsComponent } from './components/pelicula-details/pelicula-details.component';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPeliculaComponent,
    PeliculaDetailsComponent,
    PeliculaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
