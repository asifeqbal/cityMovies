import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import RegisterService from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  customer  = {name:'', password:'', address:'', email:'',phone:''};

  constructor(private router: Router,private registerService :RegisterService) { }
  
  addCustomer(customer){
    //alert('adcustomer working');
    
    this.registerService.addRemoteCustomer(this.customer).
    subscribe(()=>{this.router.navigate(['/movielist']);});
    
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }


  ngOnInit() {}

}
