import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule}     from  '@angular/router';

import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { ProfileComponent } from './profile/profile.component';
import {AngularFireModule}  from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDdq59CZgFG252CdhRczkEMcInVe3U-YdU",
  authDomain: "audiobook-ce377.firebaseapp.com",
  projectId: "audiobook-ce377",
  storageBucket: "audiobook-ce377.appspot.com",
  messagingSenderId: "237490650176",
  appId: "1:237490650176:web:9d0e3010f556928eadf3a5",
  measurementId: "G-S2LFV2F5BV"
};


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainnavbarComponent,
    MainfooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
