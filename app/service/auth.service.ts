import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../appinterface/auth-response.interface';
import { config } from '../config';
import {AngularFireAuth} from '@angular/fire/auth';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import {auth} from "../../../node_modules/firebase";






 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http:HttpClient,private authFire:AngularFireAuth,private router:Router) { }

  signup(email,password){

    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,{
      email:email,
      password:password,
      returnSecureToken:true
     
    })
  
    
  }

    login(email,password){
      return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,{
        email:email,
        password:password,
        returnSecureToken:true
  

   

  })
 
}


// async signinwithgoodle(){
//   const result = await this.authFire.auth.signInWithRedirect(new auth.GoogleAuthProvider());

// }



}
