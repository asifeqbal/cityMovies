import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AddmovieService from '../addmovie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  movie ={name:'',year:'',image_url:'',production_house:'',rating:'',type:'',language:'',date:''};

  constructor(private router: Router,private addmovieService:AddmovieService) { }
  addMovie(){
    this.addmovieService.addRemoteMovie(this.movie).
    subscribe(()=>{this.router.navigate(['/movielist']);});

    this.router.navigate(['/movielist'])
    

  }

  ngOnInit() {}

}
