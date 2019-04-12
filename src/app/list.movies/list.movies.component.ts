import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.movies',
  templateUrl: './list.movies.component.html',
  styleUrls: ['./list.movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

  movie_date = '';
  movies = this.movieService.getMovies();

  constructor(private movieService: MovieService, private router:Router) { }

  ngOnInit() {

    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }
  slideChanged(slides){
    slides.startAutoplay();
  }
  offerpage(){
    this.router.navigate(['/offer']);

  }
  

  booking(movie){
    this.router.navigate(['moviebook/'+movie]);
  }
}
