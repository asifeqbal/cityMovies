import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss'],
})
export class ForgetpassComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {}
 
  forgetpassworddone(){

    this.router.navigate(['/login']);
  }

}
