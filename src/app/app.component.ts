import { AotSummaryResolver } from '@angular/compiler';
import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';

import * as AOS from 'aos';
declare var $:any;
import 'ekko-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weccaWebsite';

  ngOnInit(){
    AOS.init();
    
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });
  }

}

