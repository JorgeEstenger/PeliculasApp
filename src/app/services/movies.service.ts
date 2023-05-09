import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartlera-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCartelera():Observable<CarteleraResponse>{

  return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=60f91ddbe5a9a13cea99612e395f1caa&language=es-US&page=1')
}
}
