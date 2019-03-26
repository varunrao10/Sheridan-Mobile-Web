
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
    sid: 991000000, 
    sname: "Varun Rao", 
    scampus: "Davis", 
    slogin: "doej" 
  }

  constructor() { }

  ngOnInit() {
  }

}
