import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export default class MovieService {
  private movieUrl = 'http://localhost:3000/api/movies'

  constructor(private http: HttpClient) { }

  movies = [];

  
getRemoteMovies(): Observable<[]>{
  return this.http.get<[]>(this.movieUrl); 		
}

addRemoteMovie(customer):Observable<any>{
  return this.http.post(this.movieUrl,customer);
}

deleteRemoteMovie(movie): Observable<[]>{
  return this.http.delete<[]>(this.movieUrl+'/'+movie.id);
}
getMovies(){
  return this.movies;
}
getRemoteMovieById(id):Observable<any>{
  return this.http.get<[]>(this.movieUrl + "/"+id);
 }

}
