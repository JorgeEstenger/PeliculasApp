import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieResponse } from '../../interfaces/movie-response'
 

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie!: MovieResponse;
  router: any;



  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location) { }
    ngOnInit(): void {

      const { id } = this.activatedRoute.snapshot.params;
  
        this.moviesService.getPeliculaDetalle( id ).subscribe( ( [this.movie] ),{
        this:this.movie = this.movie,  
      
      });
 
    
      
   
  }

  onRegresar(){
    this.location.back();

  }


}
