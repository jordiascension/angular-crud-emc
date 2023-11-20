import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-details',
  templateUrl: './pelicula-details.component.html',
  styleUrls: ['./pelicula-details.component.scss']
})
export class PeliculaDetailsComponent  implements OnInit  {

  @Input() viewMode = false;

  @Input() currentPelicula: Pelicula = {
    id: '',
    nombre: '',
    director: '',
    clasificacion: ''
  };

  message = '';

  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPelicula(this.route.snapshot.params["id"]);
    }
  }

  getPelicula(id: string): void {
    this.peliculaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPelicula = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePelicula(status: boolean): void {
    const pelicula : Pelicula = {
      nombre: this.currentPelicula.nombre,
      director: this.currentPelicula.director,
      clasificacion: this.currentPelicula.clasificacion
    };

    this.message = '';

    this.peliculaService.update(this.currentPelicula.id, pelicula)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPelicula.nombre = pelicula.nombre;
          this.currentPelicula.clasificacion = pelicula.clasificacion;
          this.currentPelicula.director = pelicula.director;
          this.message = res.message ? res.message : 'The film was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.peliculaService.update(this.currentPelicula.id, this.currentPelicula)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.peliculaService.delete(this.currentPelicula.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/peliculas']);
        },
        error: (e) => console.error(e)
      });
  }
}
