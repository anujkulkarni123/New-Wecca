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

  //we could use a dictionary here

  ngOnInit() {
  }
  //I will look into dictionaries, for now I just wanted to get this function working
  /*
  Function to change the text under the executive description as well as the height of the gallery box on click
  */
  changeText(event, name, id){
    var text;
    var info = document.getElementById(id).innerHTML;
    var tag = "";
    var ind = 0;
  
    if(name == 'will' || name == 'megan' || name == 'sneha'){
      tag = "gallery-1";
    }
    else if(name == "anuj" || name == "ethan" || name == "andrew"){
      tag = "gallery-2";
    }
    else if(name == "anthony" || name == "lauren" || name == "keston"){
      tag = "gallery-3";
    }
    else if(name == "liam" || name == "jen" || name == "trevor"){
      tag = "gallery-4";
    }
    else if(name == "jericho" || name == "kara" || name == "sierra"){
      tag = "gallery-5";
    }
    else if(name == "sam" || name == "mac"){
      tag = "gallery-6";
    }
    
    if(name == 'will' && info == ''){
      text = "Insert Will's Description";
    }
    else if(name == 'megan' && info == ''){
      text = "Insert Megan's Description";
    }
    else if(name == 'sneha' && info == ''){
      text = "Insert Sneha's Description";
    }
    else if(name == 'anuj' && info == ''){
      text = "Insert Anuj's Description";
    }
    else if(name == 'ethan' && info == ''){
      text = "Insert Ethan's Description; here is what a multi line description would look like here";
    }
    else if(name == 'andrew' && info == ''){
      text = "Indert Andrew's Description";
    }
    else if(name == 'anthony' && info == ''){
      text = "Insert Anthony's Description";
    }
    else if(name == 'lauren' && info == ''){
      text = "Insert Lauren's Description";
    }
    else if(name == 'keston' && info == ''){
      text = "Indert Keston's Description";
    }
    else if(name == 'liam' && info == ''){
      text = "Insert Liam's Description";
    }
    else if(name == 'jen' && info == ''){
      text = "Insert Jen's Description";
    }
    else if(name == 'trevor' && info == ''){
      text = "Insert Trevor's Description";
    }
    else if(name == 'jericho' && info == ''){
      text = "Insert Jericho's Description";
    }
    else if(name == 'kara' && info == ''){
      text = "Insert Kara's Description";
    }
    else if(name == 'sierra' && info == ''){
      text = "Insert Sierra's Description";
    }
    else if(name == 'sam' && info == ''){
      text = "Insert Sam's Description";
    }
    else if(name == 'mac' && info == ''){
      text = "Insert Mac's Description";
    }
    else {
      text ='';
    }

    document.getElementById(id).innerHTML = text;
    if(text != ''){
      document.getElementById(tag).style.gridTemplateRows = "55vmin";
    }
    else{
      var rowNum = Number(tag.slice(8,9));
      var elemMin = 1;

      if(rowNum > 1){
        elemMin = ((rowNum - 1)* 3);
      }
      else{
        elemMin = 0;
      }

      if(rowNum < 6){
        var inc = 3;
      }
      else{
        inc = 2;
      }

      var IDs = document.getElementsByClassName('subtext');
      for(var i = elemMin; i < elemMin + inc; i++){
        if(IDs[i].innerHTML != ''){
          ind ++;
        }
      }

      if(ind == 0){
        document.getElementById(tag).style.gridTemplateRows = "45vmin";
      }
      else {
        document.getElementById(tag).style.gridTemplateRows = "55vmin";
      }
    }
  }
}