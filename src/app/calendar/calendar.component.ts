import {
  CalendarView,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTitleFormatter,
  CalendarEventTimesChangedEvent,
} from "angular-calendar";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  Input,
} from "@angular/core";

import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
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
import { ModalContentComponent } from "../modal-content/modal-content.component";

//Track colours
const colors: any = {
  //General --> general
  //Materials --> materials
  //Mould --> mould
  //Design and Analysis --> design
  //Research and Development --> research
  //Executive General --> executive
  //Software --> software
  //Training --> training
  //Graphic Design --> graphic
  //Tech comms/pres --> presentation

  general: {
    primary: "#7945bd",
    secondary: "#e3d0f0",
  },
  executive: {
    primary: "#3C91E6",
    secondary: "#92c9ff",
  },
  software: {
    primary: "#A2D729",
    secondary: "#cfea91",
  },
  materials: {
    primary: "#FA824C",
    secondary: "#ffbea0",
  },
  mould: {
    primary: "#D4AFB9",
    secondary: "#fcdfe6",
  },
  design: {
    primary: "#FFB30F",
    secondary: "#ffdd95",
  },
  research: {
    primary: "#bcc2bc",
    secondary: "#F2F7F2",
  },
  presentation: {
    primary: "#8B9D83",
    secondary: "#bedcb0",
  },
  graphic: {
    primary: "#5d6b67",
    secondary: "#b4bfbc",
  },
  training: {
    primary: "#E54F6D",
    secondary: "#ed9dad",
  },
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
    },
  ],
})
export class CalendarComponent implements OnInit {
  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any>;
  //@ViewChild("modalPopup", {static: false}) modalPopup: String;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  //calendarEvents: CalendarEvent[] = [];
  dataIsAvailable: boolean = false;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: "Edit",
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent("Edited", event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: "Delete",
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.calendarEvents = this.calendarEvents.filter(
          (iEvent) => iEvent !== event
        );
        this.handleEvent("Deleted", event);
      },
    },
  ];

  public sampleEvent: inputData = {
    calendarData: {
      title: "",
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(startOfDay(new Date()), 11),
      color: colors.general,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: "",
      allDay: false,
    },
    recurrence: {
      isRecurring: false,
      frequency: null,
      repeat: null
    }
  };

  calendarEvents: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: addHours(startOfDay(new Date()), 1),
      title: "General Event",
      color: colors.general,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: "This is the comment for a general meeting. Here is the location ________.",
    },
    {
      start: addHours(startOfDay(new Date()), 1),
      end: addHours(startOfDay(new Date()), 2),
      title: "Executive Event",
      color: colors.executive,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(startOfDay(new Date()), 3),
      title: "Software Event",
      color: colors.software,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 3),
      end: addHours(startOfDay(new Date()), 4),
      title: "Materials Event",
      color: colors.materials,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 4),
      end: addHours(startOfDay(new Date()), 5),
      title: "Mould Event",
      color: colors.mould,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 5),
      end: addHours(startOfDay(new Date()), 6),
      title: "Design and Analysis Event",
      color: colors.design,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 6),
      end: addHours(startOfDay(new Date()), 7),
      title: "Research and Development Event",
      color: colors.research,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 7),
      end: addHours(startOfDay(new Date()), 8),
      title: "Technical Presentation/Communications Event",
      color: colors.presentation,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      end: addHours(startOfDay(new Date()), 9),
      title: "Training Event",
      color: colors.training,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours(startOfDay(new Date()), 9),
      end: addHours(startOfDay(new Date()), 10),
      title: "Graphic Design Event",
      color: colors.graphic,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
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

  constructor(
    private modal: NgbModal,
    private http: HttpClient,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

  modalPop(): void {
    const modalRef = this.modal.open(ModalContentComponent);
    this.resetModal();
    modalRef.componentInstance.sampleEvent = this.sampleEvent;

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.calendarEvents = [
          ...this.calendarEvents,
          this.sampleEvent.calendarData
        ]
        this.addRecurring(result);
      }
    });
  }

  addRecurring(data : inputData): void {
    if(data.recurrence.isRecurring){
      let start: Date = data.calendarData.start;
      let end : Date = data.calendarData.end;

      for(let i = 1; i < data.recurrence.repeat; i++){

        let newEvent : CalendarEvent = {
          title: data.calendarData.title,
          start: data.calendarData.start,
          end: data.calendarData.end,
          color: data.calendarData.color,
          resizable: data.calendarData.resizable,
          draggable: data.calendarData.draggable,
          meta: data.calendarData.meta,
          allDay: data.calendarData.allDay,
        }
          
        if(data.recurrence.frequency == "weekly"){
          newEvent.start = addWeeks(start, i);
          newEvent.end = addWeeks(end, i);
        }
        if(data.recurrence.frequency == 'biweekly'){
          newEvent.start = addWeeks(start, 2 * i);
          newEvent.end = addWeeks(end, 2 * i);
        }
        if(data.recurrence.frequency == 'monthly'){
          newEvent.start = addMonths(start, i);
          newEvent.end = addMonths(end, i);
        }
        console.log(newEvent);

        this.calendarEvents.push(newEvent);
      }
    }
  }

  resetModal(): void {
    this.sampleEvent = {
      calendarData: {
        title: "",
        start: addHours(startOfDay(new Date()), 10),
        end: addHours(startOfDay(new Date()), 11),
        color: colors.general,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
        meta: "",
        allDay: false,
      },
      recurrence: {
        isRecurring: false,
        frequency: null,
        repeat: null
      }
    };
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
        title: "New event",
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

  deleteEvent(eventToDelete: CalendarEvent) {
    this.calendarEvents = this.calendarEvents.filter((event) => event !== eventToDelete);
  }

  submitChanges(eventToSubmit: CalendarEvent){
    console.log(eventToSubmit);
    //Push to database!
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  /*
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
  */
}

interface inputData {
  calendarData : CalendarEvent,
  recurrence : recur
}

interface recur {
  isRecurring: boolean,
  frequency: String,
  repeat: number
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
