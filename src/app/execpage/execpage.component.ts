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

  changeText(event, name, id){
    var text;
    var info = document.getElementById(id).innerHTML;
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
      text = "Insert Ethan's Description";
    }
    else if(name == 'andrew' && info == ''){
      text = "Indert Andrew's Description";
    }
    else if(name == 'tony' && info == ''){
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
      text = "Indert Trevor's Description";
    }
    else if(name == 'jericho' && info == ''){
      text = "Insert Jericho's Description";
    }
    else if(name == 'kara' && info == ''){
      text = "Insert Kara's Description";
    }
    else if(name == 'sierra' && info == ''){
      text = "Indert Sierra's Description";
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
  }

}