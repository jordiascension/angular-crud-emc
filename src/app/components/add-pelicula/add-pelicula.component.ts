import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-add-pelicula',
  templateUrl: './add-pelicula.component.html',
  styleUrls: ['./add-pelicula.component.scss']
})
export class AddPeliculaComponent implements OnInit{

  pelicula: Pelicula = {
    id: 0,
    nombre: '',
    director: '',
    clasificacion: ''
  };

  submitted = false;

  ngOnInit(): void {
    console.log('AddPeliculaComponent Loaded.');
  }

  constructor(private peliculaService: PeliculaService) { }

  savePelicula(): void {
    const data = {
      id : this.pelicula.id,
      nombre: this.pelicula.nombre,
      title: this.pelicula.clasificacion,
      description: this.pelicula.director,
    };

    this.peliculaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
}
