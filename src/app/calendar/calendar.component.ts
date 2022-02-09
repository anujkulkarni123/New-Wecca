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
import { CustomEventTitleFormatter } from "./custom-event-title-formatter.provider";
import { Subject } from "rxjs";
import { ModalContentComponent } from "../modal-content/modal-content.component";
import { EventService } from "../event.service";
import { ActivatedRoute, Router } from '@angular/router';

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

  events: any = [];
  public static options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
  } as const;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  //calendarEvents: CalendarEvent[] = [];
  dataIsAvailable: boolean = false;
  message = '';
  localeStart = '';
  localeEnd = '';

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

  public event: inputData = {
    calendarData: {
      title: "",
      start: new Date(),
      end: new Date(),
      color: colors.general,
      /*
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      */
      meta: "",
      allDay: false,
    },
    recurrence: {
      isRecurring: false,
      frequency: null,
      repeat: null,
    },
    team: null,
  };

  searchThis(data) {
    let content = this.calendarEvents;
    if (data) {
      content = content.filter(function (ele, i, array) {
        let arrayelement = ele.title.toLowerCase();
        return arrayelement.includes(data);
      });
    } else {
      console.log(content);
    }
    console.log(content);
  }

  getEvents(): void {
    this.eventService.getAll().subscribe(
      (data) => {
        this.events = data;
        this.events.forEach((element) => {
          element.start = new Date(element.start);
          element.end = new Date(element.end);
        });
        this.calendarEvents = [...this.calendarEvents, ...this.events];
        this.sortEvents();
        this.dataIsAvailable = true;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteAll(): void {
    this.eventService.deleteAll().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.events = [];
  }

  saveEvent(): void {
    const data = {
      title: this.event.calendarData.title,
      meta: this.event.calendarData.meta,
      start: new Date(this.event.calendarData.start),
      end: new Date(this.event.calendarData.end),
      team: this.event.team,
      allDay: this.event.calendarData.allDay,
      color: this.event.calendarData.color,
    };

    this.eventService.create(data).subscribe(
      (response) => {
        response.start = new Date(response.start);
        response.end = new Date(response.end);
        this.calendarEvents = [...this.calendarEvents, response];
        this.sortEvents();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateEvent(toUpdate): void {
    this.eventService.update(toUpdate._id, toUpdate)
      .subscribe(
        response => {
          const timeout = 3000;
          console.log(response);
          this.sortEvents();
          this.message = 'The event was updated successfully!';
          setTimeout(() => this.message = '', timeout );
        },
        error => {
          console.log(error);
        });
  }

  deleteEvent(toDelete): void {
    this.eventService.delete(toDelete._id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.calendarEvents = this.calendarEvents.filter(
      (event) => event !== toDelete
    );
  }

  searchTitle(title): void {
    if(title == undefined) this.calendarEvents = this.allEvents;
    this.eventService.findByTitle(title)
      .subscribe(
        data => {
          data.forEach((element) => {
            element.start = new Date(element.start);
            element.end = new Date(element.end);
          });
          this.calendarEvents = data;
          this.sortEvents();
          console.log(data);
        },
        error => {
          console.log(error);
        });
    console.log(this.calendarEvents);
  }

  sortEvents(): void {
    this.calendarEvents.sort((a: CalendarEvent, b: CalendarEvent) => {
      return b.start.getTime() - a.start.getTime();
    })
  }

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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
      draggable: true,
    },
  ];
  allEvents: CalendarEvent[] = this.calendarEvents;

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
    public activeModal: NgbActiveModal,
    public eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    //this.searchThis("general");
    this.getEvents();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.localeStart = event.start.toLocaleString(undefined, CalendarComponent.options);
    this.localeEnd = event.end.toLocaleString(undefined, CalendarComponent.options);
    this.modal.open(this.modalContent, { size: "lg" });
  }

  modalPop(): void {
    const modalRef = this.modal.open(ModalContentComponent);
    this.resetModal();
    modalRef.componentInstance.event = this.event;

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.saveEvent();
        this.addRecurring(result);
      }
    });
  }

  addRecurring(data: inputData): void {
    if (data.recurrence.isRecurring) {
      let start: Date = data.calendarData.start;
      let end: Date = data.calendarData.end;

      for (let i = 1; i < data.recurrence.repeat; i++) {
        this.event = {
          calendarData: {
            title: data.calendarData.title,
            start: data.calendarData.start,
            end: data.calendarData.end,
            color: data.calendarData.color,
            resizable: data.calendarData.resizable,
            draggable: data.calendarData.draggable,
            meta: data.calendarData.meta,
            allDay: data.calendarData.allDay,
          },
          recurrence: {
            isRecurring: false,
            frequency: null,
            repeat: null,
          },
          team: "General",
        };

        if (data.recurrence.frequency == "weekly") {
          this.event.calendarData.start = addWeeks(start, i);
          this.event.calendarData.end = addWeeks(end, i);
        }
        if (data.recurrence.frequency == "biweekly") {
          this.event.calendarData.start = addWeeks(start, 2 * i);
          this.event.calendarData.end = addWeeks(end, 2 * i);
        }
        if (data.recurrence.frequency == "monthly") {
          this.event.calendarData.start = addMonths(start, i);
          this.event.calendarData.end = addMonths(end, i);
        }
        console.log(this.event);

        this.saveEvent();
      }
    }
  }

  resetModal(): void {
    this.event = {
      calendarData: {
        title: "",
        start: new Date(),
        end: new Date(),
        color: colors.general,
        /*
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
        */
        meta: "",
        allDay: false,
      },
      recurrence: {
        isRecurring: false,
        frequency: null,
        repeat: null,
      },
      team: null,
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

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
}

interface inputData {
  calendarData: CalendarEvent;
  recurrence: recur;
  team: string;
}

interface recur {
  isRecurring: boolean;
  frequency: String;
  repeat: number;
}
