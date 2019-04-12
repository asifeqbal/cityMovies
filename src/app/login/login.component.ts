import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import RegisterService from '../register.service';
import { Alert } from 'selenium-webdriver';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  constructor(public alertController: AlertController, private router: Router,private registerService:RegisterService,private camera: Camera) { }


  validate:any={};
  data:any={};

  onLogin(){
    this.registerService.authRemoteCustomer(this.validate).subscribe((customer) => { this.data= customer; if( typeof(this.data.email)=='string') { this.router.navigate(['movielist']);} else { this.presentAlert();} });
   
  
  }

  ngOnInit() 
  {

  }

    


  // onLogin(){
   
  //   if(this.username==this.password){
  //     this.router.navigate(['/movielist']);
  //   }

    
  //   else if(this.username!= this.password){
  //     this.presentAlert();
  //     //alert("Hi");
    
  //   }   
  // }

  getPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
    




 takePicture(){
 
  
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
 }

  

  forgotPass(){
    this.router.navigate(['/forgetpass']);
  }

  register(){

    this.router.navigate(['/register']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'Incurrect User Name or password',
      message: 'Please try Again',
      buttons: ['OK']
    });

    await alert.present();
  }

  }



