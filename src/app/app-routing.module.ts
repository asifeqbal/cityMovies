import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { MoviesComponent } from './movies/movies.component';
import { OfferComponent } from './offer/offer.component';
import { PaymentComponent } from './payment/payment.component';
import { MakebookingComponent } from './makebooking/makebooking.component';
import { PaymentdoneComponent } from './paymentdone/paymentdone.component';

import { ListMoviesComponent } from './list.movies/list.movies.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'forgetpass', component:ForgetpassComponent},
  { path: 'movie', component:MoviesComponent},
  { path: 'offer', component:OfferComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'paymentdone', component:PaymentdoneComponent},
  { path: 'movielist', component:ListMoviesComponent},
  { path: 'moviebook/:id', component:MakebookingComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
