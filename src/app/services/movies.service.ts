import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartlera-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getPeliculaDetalle: any;
  getMoviesDetalles(id: any) {
    throw new Error('Method not implemented.');
  }

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carterelaPage = 1;
  public cargando: boolean = false;

 

  constructor(private http: HttpClient) { }

  get params () {
    return{
      api_key:'60f91ddbe5a9a13cea99612e395f1caa',
      language: 'es-US',
      page: this.carterelaPage
      
    }
    
    
  }

  resetCartelera(){
    this.carterelaPage=1;
  }

  getCartelera():Observable<CarteleraResponse>{

    if (this.cargando){
      //cargando peliculas
      
      
    }

    console.log('cargando API')
    this.cargando= true;

  return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
    params: this.params
  }).pipe(
    tap( () => {
    this.carterelaPage += 1;
    this.cargando = false ;
  })
  )
}
//https://api.themoviedb.org/3/search/movie

searchMovies(texto:string): Observable<Movie[]>{
const params = {...this.params, page:1, query: texto};

return  this.http.get<CarteleraResponse>(`${ this.baseUrl}/search/movie`,{
  params
}).pipe(
  map(resp => resp.results)
)

}
}
