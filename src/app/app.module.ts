import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { ExecpageComponent } from './execpage/execpage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { newPageComponent } from './newPage/newPage.component';


import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// 

imports: [
    BrowserModule,
    AppRoutingModule,
    
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
    ] 
//
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExecpageComponent,
    CalendarComponent,
    SponsorsComponent,
    newPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgbPaginationModule, 
    NgbAlertModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class DemoModule {}

import 'flatpickr/dist/flatpickr.css'; // you may need to adjust the css import depending on your build tool
@NgModule({
  imports: [FormsModule, FlatpickrModule.forRoot()]
})
export class MyModule {}