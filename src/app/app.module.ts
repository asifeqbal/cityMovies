import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { MoviesComponent } from './movies/movies.component';
import { OfferComponent } from './offer/offer.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdoneComponent } from './paymentdone/paymentdone.component';
import { RegisterComponent } from './register/register.component';
import { ListMoviesComponent } from './list.movies/list.movies.component';
import { MakebookingComponent } from './makebooking/makebooking.component';
import { HttpClientModule } from '@angular/common/http';

//for camera
import {Camera} from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpassComponent,
    MoviesComponent,
    OfferComponent,
    PaymentComponent,
    PaymentdoneComponent,
    RegisterComponent,
    ListMoviesComponent,
    MakebookingComponent   

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
