import { CalendarView, CalendarEvent, CalendarEventAction} from 'angular-calendar';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addHours, endOfDay, startOfDay, subDays, setHours,
   setMinutes, addMinutes, isSameMonth, isSameDay } from 'date-fns';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  
  setView(view: CalendarView) {
    this.view = view;
  }

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  constructor(private modal: NgbModal) {}

  ngOnInit() {
    
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: setHours(new Date(), 2),
      title: '2 hour event at beginning of day',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
    },
    {
      start: setHours(startOfDay(new Date()), 10),
      end: setHours(new Date(),15),
      title: '5 hour event starting at 10 am',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
    },
    {
      title:"Software Meeting",
      start: new Date("2021-11-10T20:30:00.000Z"),
      end: addHours(new Date("2021-11-10T20:30:00.000Z"), 1),
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
    },
  ];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date.toLocaleString());
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}

// interface MyEvent extends CalendarEvent {
//   foo: string;
// }

// events: MyEvent[] = [{
//   title: 'title',
//   start: startOfDay(new Date()),
//   //color: {primary: '', secondary: ''},
//   //foo: 'bar'
// }]