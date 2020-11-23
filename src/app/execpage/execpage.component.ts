import { Component, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-execpage',
  templateUrl: './execpage.component.html',
  styleUrls: ['./execpage.component.css'],
})
export class ExecpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeText(){
    if(document.getElementById('anuj-info1').innerHTML == ''){
      document.getElementById('anuj-info1').innerHTML = "Here is Anuj's description from TS! <br> This still needs work";
    } 
    else {
      document.getElementById('anuj-info1').innerHTML = '';
    }
  }
}

/* WIP:

changeText(event, name){
    if(name == "anuj"){
      if(document.getElementById('anuj-info1').innerHTML == ''){
        document.getElementById('anuj-info1').innerHTML = "Here is Anuj's description from TS! <br> Need to work on different messages <br> for different people!";
      } 
      else {
        document.getElementById('anuj-info1').innerHTML = '';
      }
    }
    if(name == "ethan"){
      if(document.getElementById('ethan-info1').innerHTML == ''){
        document.getElementById('ethan-info1').innerHTML = "Here is Ethan's description from TS! <br> Need to work on different messages <br> for different people!";
      } 
      else {
        document.getElementById('ethan-info1').innerHTML = '';
      }
    }
    if(name == "andrew"){
      if(document.getElementById('andrew-info1').innerHTML == ''){
        document.getElementById('andrew-info1').innerHTML = "Here is Andrew's description from TS! <br> Need to work on different messages <br> for different people!";
      } 
      else {
        document.getElementById('andrew-info1').innerHTML = '';
      }
    }
  }

*/