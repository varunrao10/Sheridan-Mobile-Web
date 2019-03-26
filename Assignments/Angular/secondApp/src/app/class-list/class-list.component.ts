import { Component, OnInit } from '@angular/core';
import { MYCLASSES} from '../myClasses';
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassList implements OnInit {
    myclasses = MYCLASSES;
  constructor() { }

  ngAfterViewInit(){
    var divs = document.getElementById("myList").getElementsByTagName("div")
    for(let x=0; x<divs.length;x++){
      divs[x].style.display = "none"
    }
  }
  
  onClickMe(index){
    var divs = document.getElementById("myList").getElementsByTagName("div")
    if(divs[index].style.display =='none'){
      divs[index].style.display = 'block';
    }
    
    else{
      divs[index].style.display = 'none'
    }
  }
  
  ngOnInit() {

  }

}

