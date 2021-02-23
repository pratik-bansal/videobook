import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import bookdatas from '../_files/bookdata.json'; 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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
