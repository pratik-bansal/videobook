import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router}     from  '@angular/router';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { AuthService } from '../service/auth.service';








@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  error:string;
 
 
  
    constructor(private login: FormBuilder,private route:Router,private _authService:AuthService,
      private router:Router
      
      ){
  
      this.loginForm = this.login.group({
  
        EmailPhone : ['',Validators.required],
  
        Password : ['',[Validators.required,Validators.minLength(6)]],
  
      
  
      });
  
    }

    get EmailPhone(){
  
      return this.loginForm.get('EmailPhone');
  
    }
  
    get Password(){
  
      return this.loginForm.get('Password');
  
    }
  
 


    onlogin(){
      
        if(this.loginForm.valid){
    
          console.log(this.loginForm.value);
          console.log('hiiii')
          const email=this.loginForm.value.EmailPhone;
          const password=this.loginForm.value.Password;
          this._authService.login(email,password).subscribe(res=>{
            console.log(res)
         
            this.router.navigate(['home'])
          },
          err=>{
            console.log(err)
            this.error=err.error.error.message;

            alert(`${this.error}`);
          }
          )
        }
      

    }
    

  ngOnInit(): void {

  }

}
