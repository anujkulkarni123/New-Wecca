import {
  CalendarView,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTitleFormatter,
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
  addDays,
  endOfMonth,
} from "date-fns";
import { HttpClient } from "@angular/common/http";
const KEYS = require("./secret.ts");
import { CustomEventTitleFormatter } from "./custom-event-title-formatter.provider";
import { Subject } from "rxjs";

//Track colours
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  purple: {
    primary: "#7945bd",
    secondary: "#e3d0f0",
  }
};

@Component({
  selector: "app-calendar",
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    }
  ]
})
export class CalendarComponent implements OnInit {
  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any>;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  calendarEvents: CalendarEvent[] = [];
  dataIsAvailable: boolean = false;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.calendarEvents = this.calendarEvents.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

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
          color: colors.purple
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
        color: colors.purple
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

  addEvent(): void {
    this.calendarEvents = [
      ...this.calendarEvents,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.purple,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
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
