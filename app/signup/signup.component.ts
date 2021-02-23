import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

// import userdatas from '../_files/userdata.json'; 
import { AuthService } from '../service/auth.service.js';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  error:string;
  signupForm:FormGroup;
  
  // user:any;

    constructor(private fb: FormBuilder,private _authService:AuthService,private router:Router
      ){
  
      this.signupForm = this.fb.group({
  
        FirstName : ['',Validators.required],
  
        LastName : [''],
  
        EmailPhone : ['',Validators.required],
  
        UserName : ['',Validators.required],
  
        Password : ['',[Validators.required,Validators.minLength(6)]],
  
        ConfirmPassword : ['',Validators.required]
  
      });
  
    }
  
   
  
    get FirstName(){
  
      return this.signupForm.get('FirstName');
  
    }
  
    get LastName(){
  
      return this.signupForm.get('LastName');
  
    }
  
    get EmailPhone(){
  
      return this.signupForm.get('EmailPhone');
  
    }
  
    get UserName(){
  
      return this.signupForm.get('UserName');
  
    }
  
    get Password(){
  
      return this.signupForm.get('Password');
  
    }
  
    get ConfirmPassword(){
  
      return this.signupForm.get('ConfirmPassword');
  
    }
  
  OnSubmit(){
    if(this.signupForm.valid){

      console.log(this.signupForm.value);
      console.log('hiiii')
      const email=this.signupForm.value.EmailPhone;
      const password=this.signupForm.value.Password;
      this._authService.signup(email,password).subscribe(res=>{
        console.log(res)
        this.router.navigate(['login'])
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
  
      //this.signService.getUser().subscribe(data=>this.user=data);
  
    }
  
   
  
  }