import {
  CalendarView,
  CalendarEvent,
  CalendarEventAction,
} from "angular-calendar";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  addHours,
  endOfDay,
  startOfDay,
  subDays,
  setHours,
  setMinutes,
  addMinutes,
  isSameMonth,
  isSameDay,
  getMonth,
  setWeek,
  addWeeks,
  addMonths,
} from "date-fns";
import { CalendarEventActionsComponent } from "angular-calendar/modules/common/calendar-event-actions.component";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { HttpClient } from "@angular/common/http";
const KEYS = require("./secret.ts");

@Component({
  selector: "app-calendar",
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnInit {
  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any>;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  calendarEvents: CalendarEvent[] = [];
  dataIsAvailable: boolean = false;

  setView(view: CalendarView) {
    this.view = view;
  }

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  constructor(private modal: NgbModal, private http: HttpClient) {}

  ngOnInit() {

    this.fillEvents("general");

    //Uncomment when exec calendar is fixed
    //this.fillEvents('exec');
    
  }

  private fillEvents(calendar: string){
    let count = 0;
    let temp = this.getData(calendar);

    temp.then((d) => {
      for (let item of d) {
        if (item["status"] == "cancelled") {
          count++;
          continue;
        }
        if(item['recurrence']){
          this.addRecurringDates(item);
        }
        this.calendarEvents[count] = {
          title: item["summary"],
          start:
            item["start"]["dateTime"] != null
              ? new Date(item["start"]["dateTime"])
              : new Date(item["start"]["date"]),
          end:
            item["start"]["dateTime"] != null
              ? new Date(item["end"]["dateTime"])
              : endOfDay(new Date(item["start"]["date"])),
          allDay: item["start"]["dateTime"] == null ? true : false,

          //Improve colouring
          color: {
            primary: "#7945bd",
            secondary: "#e3d0f0",
          },
          //Next steps: location
        };

        count++;

        if (count == d.length) this.dataIsAvailable = true;
      }
    });
  }

  private addRecurringDates(dateObject : any){

    //Handles weekly, biweekly, and monthly events

    let relation : string = dateObject['recurrence'];
    let additions : string;
    let repeats : number = 1;
    let iterations : number = 1;

    //Get how often this event repeats
    let sp = [];
    sp = relation[0].split(";");

    for(let element of sp){
      if(element.indexOf("INTERVAL") >= 0){
        let split : any[] = element.split('=');
        repeats = split[1];
      }
    }
    
    if(relation[0].indexOf("WEEKLY") >= 0 && repeats == 2){
      additions = "biweekly";
      iterations = 10;
    }
    else if(relation[0].indexOf("MONTHLY") >= 0){
      additions = "monthly";
      iterations = 4;
      //getMonth(dateObject['start']['dateTime']);
    }
    else{
      additions = "weekly";
      iterations = 20;
    }

    for(let i = 0; i < iterations; i++){
      let start : Date;
      let end : Date;
      switch(additions){
        case "weekly":
          start = addWeeks(new Date(dateObject['start']['dateTime']), i + 1);
          end = addWeeks(new Date(dateObject['end']['dateTime']), i + 1);
          break;
        case "biweekly":
          start = addWeeks(new Date(dateObject['start']['dateTime']), 2 * (i + 1));
          end = addWeeks(new Date(dateObject['end']['dateTime']), 2 * (i + 1));
          break;
        case "monthly":
          start = addMonths(new Date(dateObject['start']['dateTime']), i + 1);
          end = addMonths(new Date(dateObject['end']['dateTime']), i + 1);
          break;
      }
      this.calendarEvents[this.calendarEvents.length] = {
        title: dateObject['summary'],
        start: start,
        end: end,
        color: {
          primary: "#7945bd",
          secondary: "#e3d0f0",
        }
      }
    }
  }

  private getData(calendar : string) {
    //Exec doesn't work rn
    const CALENDAR_ID = calendar === 'exec' ? KEYS.EXEC_CALENDAR_ID : KEYS.GENERAL_CALENDAR_ID;
    const KEY = KEYS.KEY;

    const url = [
      "https://www.googleapis.com/calendar/v3/calendars/",
      CALENDAR_ID,
      "/events?key=",
      KEY
    ].join("");

    return this.http
      .get(url)
      .toPromise()
      .then((data: any) => data.items);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

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
