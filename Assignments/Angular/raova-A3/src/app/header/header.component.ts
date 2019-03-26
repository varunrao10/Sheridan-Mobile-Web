
import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  currStudent : Student = 
  { 
    sId: 991498928, 
    sName: "Varun Rao", 
    sCampus: "Davis",
    sUsername: "raova", 
    sAssignment: "Assignment 3"
  }

  constructor() { }

  ngOnInit() {
  }

}
