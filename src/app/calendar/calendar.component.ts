
import { CalendarView } from 'angular-calendar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }

  constructor() { }

  ngOnInit() {
  }
}
