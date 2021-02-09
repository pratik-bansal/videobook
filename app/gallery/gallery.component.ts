import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import bookdatas from '../_files/bookdata.json'; 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  booklist:{id:String,bookname:String,authername:String,bookcategories:String,bookprice:String}[]=bookdatas;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params);
  }

}
