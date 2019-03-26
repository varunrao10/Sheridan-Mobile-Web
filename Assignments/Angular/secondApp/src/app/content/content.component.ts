import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  city : string = "Brampton";
  constructor() { }

  ngOnInit() {
   
  }
  clearCity() { this.city= ""; }
  
  backCampus(){
    return this.city.toUpperCase()==="BRAMPTON" || this.city.toUpperCase() === "OAKVILLE" ? 'blue' : 'red';
  }
}
