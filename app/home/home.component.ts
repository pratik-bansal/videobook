import { Component, OnInit } from '@angular/core';
import bookdatas from '../_files/bookdata.json'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selecteddata:any;
  selectedbook:boolean=false;

  booklist:{id:String,bookname:String,authername:String,bookcategories:String,bookprice:String}[]=bookdatas;

  constructor() { }

  ngOnInit(): void {
  }

  onclick(data){
     
    this.selecteddata=data;
    this.selectedbook=true;

  }


}
