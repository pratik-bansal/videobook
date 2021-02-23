import { Component, OnInit, Input } from '@angular/core';
import bookdatas from '../_files/bookdata.json'; 

import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  // booklist:{id:String,bookname:String,authername:String,bookcategories:String,bookprice:String}[]=bookdatas;
  
  @Input()
  book;
  constructor() { }

  ngOnInit(): void {
    console.log(this.book)
  }

}
