import { Component, OnInit } from '@angular/core';
import {Router}     from  '@angular/router';
@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.route.navigate(['/logout']);
  }
}
