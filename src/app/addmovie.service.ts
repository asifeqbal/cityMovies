import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
 export default class AddmovieService {
   private movieurl ='http://localhost:3000/api/movies';

  constructor(private http:HttpClient) { }

  movies = [];

  getRemotemMovie(): Observable<[]>{
    return this.http.get<[]>(this.movieurl); 		
  }
  addRemoteMovie(movie):Observable<any>{
    return this.http.post(this.movieurl,movie);
  }

  getMovie(){
    return this.movies;
  }
}
