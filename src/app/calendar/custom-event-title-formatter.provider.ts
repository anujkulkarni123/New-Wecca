import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { formatDate } from '@angular/common';

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  month(event: CalendarEvent): string {
    return `<b>${formatDate(event.start, 'h:mm a', this.locale)}</b> ${
      event.title
    }`;
  }

  week(event: CalendarEvent): string {
    return `<b>${formatDate(event.start, 'h:mm a', this.locale)}</b> ${
      event.title
    }`;
  }

  day(event: CalendarEvent): string {
    return `<b>${formatDate(event.start, 'h:mm a', this.locale)}</b> ${
      event.title
    }`;
  }
}