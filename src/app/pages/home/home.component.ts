import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartlera-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 
  
  public movies: Movie[]= []
  
  constructor(private moviesService: MoviesService){

  this.moviesService.getCartelera()
  .subscribe(resp=> {
    console.log(resp.results); 
    this.movies = resp.results;
    
  })
}
  ngOnInit(): void {;
  }

}
