import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-execpage',
  templateUrl: './execpage.component.html',
  styleUrls: ['./execpage.component.css']
})
export class ExecpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function swapText(){
  var info = document.getElementById("will-info").innerHTML;
  var name = document.getElementById("will-name").innerHTML;
  if(name === "Will Stevenson"){
    document.getElementById("will-info").innerHTML = "Description";
  }
  else{
    document.getElementById("will-info").innerHTML = "Will Stevenson"
  }
}