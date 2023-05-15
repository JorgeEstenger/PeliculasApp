import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartlera-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{ 
  
  public movies: Movie[]= [];
  public moviesSlideshow: Movie[]= []

  @HostListener('window:scroll', ['$event'])
  onScroll(){

const pos= (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

   if (max > pos ) {
if (this.moviesService.cargando) {return;}

    this.moviesService.getCartelera().subscribe(resp => {
      this.movies.push(...resp.results);
    })
    console.log('llamar servicio')

   }


  }
  
  constructor(private moviesService: MoviesService){

  this.moviesService.getCartelera()
  .subscribe(resp=> {
    console.log(resp.results); 
    this.movies = resp.results;
    this.moviesSlideshow = resp.results;
    
  })
}
  ngOnDestroy(): void {
    this.moviesService.resetCartelera();
  }
  ngOnInit(): void {;
  }

}
