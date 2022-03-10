import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getFeature().subscribe(res => {
      console.log('Respuesta', res);
      this.peliculasRecientes = res.results;
    });

    this.moviesService.getPopulares().subscribe(res => {
      console.log('Populares', res);
      this.populares = res.results;
    });
  }
}
