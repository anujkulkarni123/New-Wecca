import { CalendarView, CalendarEvent } from 'angular-calendar';
import { Component, OnInit } from '@angular/core';

import { startOfDay } from 'date-fns';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

var events: CalendarEvent [] = [
  {
    start: startOfDay(new Date()),
    title: 'First event',
    color: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    }
  },
  {
    start: startOfDay(new Date()),
    title: 'Second event',
    color: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    }
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