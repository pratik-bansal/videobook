import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule}     from  '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PremimumComponent } from './premimum/premimum.component';
import { WebhomeComponent } from './webhome/webhome.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    GalleryComponent,
    PremimumComponent,
    WebhomeComponent,
    HomeComponent,
    DescriptionComponent,
    MainnavbarComponent,
    MainfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
