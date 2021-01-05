import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ExecpageComponent = class ExecpageComponent {
    constructor() { }
    ngOnInit() {
    }
    changeText() {
        if (document.getElementById('anuj-info1').innerHTML == '') {
            document.getElementById('anuj-info1').innerHTML = "Here is Anuj's description from TS! <br> This still needs work";
        }
        else {
            document.getElementById('anuj-info1').innerHTML = '';
        }
    }
};
ExecpageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-execpage',
        templateUrl: './execpage.component.html',
        styleUrls: ['./execpage.component.css'],
    })
], ExecpageComponent);
export { ExecpageComponent };
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
//# sourceMappingURL=execpage.component.js.map