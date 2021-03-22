import { CalendarView, CalendarEvent } from 'angular-calendar';
import { Component, OnInit } from '@angular/core';

import { startOfDay } from 'date-fns';

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

CalendarEvent []  = [
  {
    start: startOfDay(new Date()),
    title: 'First event',
  },
  {
    start: startOfDay(new Date()),
    title: 'Second event',
  }
];

// interface MyEvent extends CalendarEvent {
//   foo: string;
// }

// events: MyEvent[] = [{
//   title: 'title',
//   start: startOfDay(new Date()),
//   //color: {primary: '', secondary: ''},
//   //foo: 'bar'
// }]