import { Pelicula } from './../../models/pelicula.model';
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './../../services/pelicula.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.scss']
})
export class PeliculaListComponent implements OnInit {
  
  peliculas?: Pelicula[];
  currentPelicula: Pelicula = {};
  currentIndex = -1;
  nombre = '';

  constructor(private peliculaService: PeliculaService) {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  retrievePeliculas(): void {
    this.peliculaService.getAll()
      .subscribe({
        next: (data) => {
          this.peliculas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePeliculas();
    this.currentPelicula = {};
    this.currentIndex = -1;
  }

  setActivePelicula(pelicula: Pelicula, index: number): void {
    this.currentPelicula = pelicula;
    this.currentIndex = index;
  }

  removeAllPeliculas(): void {
    this.peliculaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.currentPelicula = {};
    this.currentIndex = -1;

    this.peliculaService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.peliculas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
