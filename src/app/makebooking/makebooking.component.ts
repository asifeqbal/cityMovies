import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import MovieService from '../movie.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-makebooking',
  templateUrl: './makebooking.component.html',
  styleUrls: ['./makebooking.component.scss'],
})
export class MakebookingComponent implements OnInit {
  
  constructor(private movieservice:MovieService,private router:Router,private route: ActivatedRoute) { }
  
  id:number;
  private sub:any;
  movie:any={};
  booking:any;
  

  ngOnInit() {
  
   
    
    this.movie ={name:"",year:"",image_url:"",production_house:"",rating:"",type:"",language:"",date:""};
    this.booking = {
      customer_id:'',
      tickets:'',
      movie_id:'',
      movie_time:'10AM',
      theatre:'PVR',
      screen:'5',
      city:'Kolkata',
      movie_date:'2019-02-03',
      date:'2019-02-03',      
      ticket_price:100
    };
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];//converts string 'id' to a number
      this.movieservice.getRemoteMovieById(this.id).subscribe((movie)=>
      {
        this.movie = movie;
        console.log(movie);
        
      }
      );

    });

  }
  
 

  // book(){

  //   this.booking.customer_id=Math.round(Math.round()*100);
  //   this.booking.movie_id = this.movie.id;
  //   this.booking.movie_name = this.movie.name;

  //   this.booking.amount = this.booking.tickets * this.booking.ticket_price;
  
  // }


}
