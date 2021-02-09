import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PremimumComponent } from './premimum/premimum.component';
import { WebhomeComponent } from './webhome/webhome.component';
import { HomeComponent } from './home/home.component';
import {DescriptionComponent} from './description/description.component';





const appRoutes:Routes=[
  {path:'',component:WebhomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery/:id',component:GalleryComponent},
  {path:'premimum',component:PremimumComponent},
  {path:'description/:id',component:DescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
