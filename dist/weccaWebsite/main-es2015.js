(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"container\">\n    <!--changed to top bar-->\n    <nav class=\"navbar navbar-light navbar-expand-md fixed-top bg-light\">\n      <div class = \"container\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <a href=\"#landing\" class=\"navbar-brand\"><img src=\"assets/images/nav-logo.png\" alt=\"WECCA\" width=\"50\"></a>\n          <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <i class=\"navbar-toggler-icon\"></i>\n          </button>  \n\n          <!-- collapse navbar -->\n          <div class=\"navbar-collapse collapse\" id=\"navbarCollapse\">\n              <ul class=\"navbar-nav mr-auto w-100 clearfix\">\n                  <!--scroll down to page within site-->\n                  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#events\" [routerLink]=\"'calendar'\">EVENTS</a></li> \n                  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#meet-team\" [routerLink]=\"'executives'\">EXECUTIVES</a></li>\n                  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#spon\" [routerLink]=\"'sponsorship'\">SPONSORS</a></li>\n              </ul>\n          </div>\n      </div>\n  </nav>\n\n  </div>\n</header>\n\n\n<div class=\"main\">\n\n  <router-outlet></router-outlet>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html> \n\n\n<body> \n    <div class=\"row\">\n        <div class=\"block\">Events</div>\n        <div class=\"block\">\n            <iframe src=\"https://calendar.google.com/calendar/b/2/embed?height=700&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=d2VjY2EubG9naXN0aWNzQGdtYWlsLmNvbQ&amp;src=bm1vNTAzazcybHBqbnY5bWM2djdsZ3NtdDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cnJzMnZ2OTRzb3I4dHJmMGV2NWowNm42a29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D6AE00&amp;color=%23743500&amp;color=%233366CC&amp;showTz=0&amp;showTabs=1&amp;showPrint=0&amp;showNav=0&amp;showDate=0&amp;showCalendars=0\" \n            style=\"border:none\" class=center width=\"700\" height=\"500\" frameborder=\"2n\" scrolling=\"no\"></iframe> \n        </div>\n    </div>\n</body>\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n      >\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Month)\"\n        [class.active]=\"view === CalendarView.Month\"\n      >\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Week)\"\n        [class.active]=\"view === CalendarView.Week\"\n      >\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Day)\"\n        [class.active]=\"view === CalendarView.Day\"\n      >\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n\n<!-- Everything you see below is just for the demo, you don't need to include it in your app -->\n\n\n<br /><br /><br />\n\n<h3 >\n  Edit events\n  <button class=\"btn btn-primary float-right\" (click)=\"addEvent()\">\n    Add new\n  </button>\n  <div class=\"clearfix\"></div>\n</h3>\n\n<!--\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Primary color</th>\n        <th>Secondary color</th>\n        <th>Starts at</th>\n        <th>Ends at</th>\n        <th>Remove</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let event of events\">\n        <td>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"event.title\"\n            (keyup)=\"refresh.next()\"\n          />\n        </td>\n        <td>\n          <input\n            type=\"color\"\n            [(ngModel)]=\"event.color.primary\"\n            (change)=\"refresh.next()\"\n          />\n        </td>\n        <td>\n          <input\n            type=\"color\"\n            [(ngModel)]=\"event.color.secondary\"\n            (change)=\"refresh.next()\"\n          />\n        </td>\n        <td>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            mwlFlatpickr\n            [(ngModel)]=\"event.start\"\n            (ngModelChange)=\"refresh.next()\"\n            [altInput]=\"true\"\n            [convertModelValue]=\"true\"\n            [enableTime]=\"true\"\n            dateFormat=\"Y-m-dTH:i\"\n            altFormat=\"F j, Y H:i\"\n            placeholder=\"Not set\"\n          />\n        </td>\n        <td>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            mwlFlatpickr\n            [(ngModel)]=\"event.end\"\n            (ngModelChange)=\"refresh.next()\"\n            [altInput]=\"true\"\n            [convertModelValue]=\"true\"\n            [enableTime]=\"true\"\n            dateFormat=\"Y-m-dTH:i\"\n            altFormat=\"F j, Y H:i\"\n            placeholder=\"Not set\"\n          />\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">\n            Delete\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n      OK\n    </button>\n  </div>\n</ng-template>\n-->\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/execpage/execpage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/execpage/execpage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  \n  <!-- \n  <br><br><br><br>\n  <a class=\"titles\">Meet the Team</a>\n  <a class=\"text-image\" style=\"margin-top:-1.5vmin;\">Click us to find out more!</a>\n  <br>\n  -->\n\n  <!--Meet the team-->\n  <br><br>\n  <div id=\"meet-team\">  \n    <h1 class=\"center-sub\" data-aos=\"fade-up\" data-aos-duration=\"1000\">Meet the Team</h1>  \n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-8\">\n        <div class=\"row\">\n         <a href=\"assets/execphotos/will.png\" data-toggle=\"lightbox\"  data-title=\"Will Stevenson\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n            <figure>\n              <img src=\"assets/execphotos/will.png\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Will Stevenson</figcaption>\n             <figcaption>Construction Captain</figcaption>\n            </figure>                           \n          </a>\n        \n          <a href=\"assets/execphotos/megan.jpg\" data-toggle=\"lightbox\"  data-title=\"Megan Ginham\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n            <figure>\n             <img src=\"assets/execphotos/megan.jpg\" class=\"img-fluid\">   \n             <figcaption style= \"font-size: 3vmin;\">Megan Ginham</figcaption>\n             <figcaption>Logistics Captain</figcaption>\n           </figure>                           \n          </a>\n        \n         <a href=\"assets/execphotos/sneha.jpg\" data-toggle=\"lightbox\"  data-title=\"Sneha Patel\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n           <figure>\n             <img src=\"assets/execphotos/sneha.jpg\" class=\"img-fluid\">   \n             <figcaption style= \"font-size: 3vmin;\">Sneha Patel</figcaption>\n             <figcaption>Finance Captain</figcaption>\n           </figure>                           \n          </a>\n        </div>\n\n        <div class=\"row\" style = \"padding-top: 4vmin;\">\n          <a href=\"assets/execphotos/anuj.png\" data-toggle=\"lightbox\"  data-title=\"Anuj Kulkarni\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n               <img src=\"assets/execphotos/anuj.png\" class=\"img-fluid\">   \n               <figcaption style= \"font-size: 3vmin;\">Anuj Kulkarni</figcaption>\n              <figcaption>Co-Head of Software Development</figcaption>\n             </figure>                           \n           </a>\n         \n           <a href=\"assets/execphotos/ethan.png\" data-toggle=\"lightbox\"  data-title=\"Ethan Bodnar\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n              <img src=\"assets/execphotos/ethan.png\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Ethan Bodnar</figcaption>\n              <figcaption>Co-Head of Software Development</figcaption>\n            </figure>                           \n           </a>\n         \n          <a href=\"assets/execphotos/andrew.jpg\" data-toggle=\"lightbox\"  data-title=\"Andrew Markham\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n            <figure>\n              <img src=\"assets/execphotos/andrew.jpg\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Andrew Markham</figcaption>\n              <figcaption>Co-Head of Materials</figcaption>\n            </figure>                           \n           </a>\n         </div>\n\n         <div class=\"row\" style = \"padding-top: 4vmin;\">\n          <a href=\"assets/execphotos/anthony.png\" data-toggle=\"lightbox\"  data-title=\"Anthony De Rango\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n               <img src=\"assets/execphotos/anthony.png\" class=\"img-fluid\">   \n               <figcaption style= \"font-size: 3vmin;\">Anthony De Rango</figcaption>\n              <figcaption>Co-Head of Materials</figcaption>\n             </figure>                           \n           </a>\n         \n           <a href=\"assets/execphotos/lauren.jpg\" data-toggle=\"lightbox\"  data-title=\"Lauren Andersen\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n              <img src=\"assets/execphotos/lauren.jpg\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Lauren Andresen</figcaption>\n              <figcaption>Co-Head of Mould</figcaption>\n            </figure>                           \n           </a>\n         \n          <a href=\"assets/execphotos/keston.png\" data-toggle=\"lightbox\"  data-title=\"Keston Anderson\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n            <figure>\n              <img src=\"assets/execphotos/keston.png\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Keston Anderson</figcaption>\n              <figcaption>Co-Head of Mould</figcaption>\n            </figure>                           \n           </a>\n         </div>\n\n         <div class=\"row\" style = \"padding-top: 4vmin;\">\n          <a href=\"assets/execphotos/trevor.png\" data-toggle=\"lightbox\"  data-title=\"Trevor Stone\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n               <img src=\"assets/execphotos/trevor.png\" class=\"img-fluid\">   \n               <figcaption style= \"font-size: 3vmin;\">Trevor Stone</figcaption>\n              <figcaption>Co-Head of Research and Development</figcaption>\n             </figure>                           \n           </a>\n         \n           <a href=\"assets/execphotos/jericho.png\" data-toggle=\"lightbox\"  data-title=\"Jericho Salvador\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n              <img src=\"assets/execphotos/jericho.png\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Jericho Salvador</figcaption>\n              <figcaption>Co-Head of Research and Development</figcaption>\n            </figure>                           \n           </a>\n         \n          <a href=\"assets/execphotos/liam.jpg\" data-toggle=\"lightbox\"  data-title=\"Liam Israels\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n            <figure>\n              <img src=\"assets/execphotos/liam.jpg\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Liam Israels</figcaption>\n              <figcaption>Co-Head of Design and Analysis</figcaption>\n            </figure>                           \n           </a>\n         </div>\n\n         <div class=\"row\" style = \"padding-top: 4vmin;\">\n          <a href=\"assets/execphotos/jen.jpg\" data-toggle=\"lightbox\"  data-title=\"Jennifer Oliva\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n               <img src=\"assets/execphotos/jen.jpg\" class=\"img-fluid\">   \n               <figcaption style= \"font-size: 3vmin;\">Jennifer Oliva</figcaption>\n              <figcaption>Co-Head of Design and Analysis</figcaption>\n             </figure>                           \n           </a>\n         \n           <a href=\"assets/execphotos/kara.png\" data-toggle=\"lightbox\"  data-title=\"Kara Bjornson\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n              <img src=\"assets/execphotos/kara.png\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Kara Bjornson</figcaption>\n              <figcaption>Head of Technical Report</figcaption>\n            </figure>                           \n           </a>\n         \n          <a href=\"assets/execphotos/sierra.jpg\" data-toggle=\"lightbox\"  data-title=\"Sierra Goss\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n            <figure>\n              <img src=\"assets/execphotos/sierra.jpg\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Sierra Goss</figcaption>\n              <figcaption>Head of Technical Presentation</figcaption>\n            </figure>                           \n           </a>\n         </div>\n\n         <div class=\"row\" style = \"padding-top: 4vmin; justify-content: center;\">\n          <a href=\"assets/execphotos/sam.png\" data-toggle=\"lightbox\"  data-title=\"Sam Goertz\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n               <img src=\"assets/execphotos/sam.png\" class=\"img-fluid\">   \n               <figcaption style= \"font-size: 3vmin;\">Sam Goertz</figcaption>\n              <figcaption>Training Coordinator</figcaption>\n             </figure>                           \n           </a>\n         \n           <a href=\"assets/execphotos/mac.png\" data-toggle=\"lightbox\"  data-title=\"Mac McGauley\" data-footer=\"Description Here\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n             <figure>\n              <img src=\"assets/execphotos/mac.png\" class=\"img-fluid\">   \n              <figcaption style= \"font-size: 3vmin;\">Mac McGauley</figcaption>\n              <figcaption>Head of Graphic Design</figcaption>\n            </figure>                           \n           </a>\n        </div>\n\n      </div>\n    </div>        \n  </div>\n\n  <!--\n  <div class=\"gallery\" id=\"gallery-1\">\n    <figure class=\"gallery__item\" id=\"will\">\n      <img src=\"assets/execphotos/will.png\" alt=\"photo of will\" class=\"gallery__img\" id=\"will-img\" (click)='changeText($event, \"will\", \"will-info1\")'>\n      <div class=\"name-image\"> \n        Will Stevenson\n      </div>\n      <a class=\"text-image\">\n        Construction Captain <br> wecca.construction@gmail.com\n      </a>\n      <a id=\"will-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/megan.jpg\" alt=\"photo of megan\" class=\"gallery__img\" (click)='changeText($event, \"megan\", \"megan-info1\")'>\n      <div class=\"name-image\"> \n        Megan Ginham \n      </div>\n      <div class=\"text-image\">\n        Logistics Captain <br> wecca.logistics@gmail.com\n      </div>\n      <a id=\"megan-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/sneha.jpg\" alt=\"photo of sneha\" class=\"gallery__img\" (click)='changeText($event, \"sneha\", \"sneha-info1\")'>\n      <div class=\"name-image\"> \n        Sneha Patel\n      </div>\n      <div class=\"text-image\">\n        Finance Captain <br> wecca.sponsorship@gmail.com\n      </div>\n      <a id=\"sneha-info1\" class=\"subtext\"></a>\n    </figure>\n  </div>\n  <div class=\"gallery\" id=\"gallery-2\">\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/anuj.png\" alt=\"photo of anuj\" class=\"gallery__img\" (click)='changeText($event, \"anuj\", \"anuj-info1\")'>\n      <div class=\"name-image\"> \n        Anuj Kulkarni\n      </div>\n      <a class=\"text-image\">\n        Co-head of Software Development\n      </a>\n      <a id=\"anuj-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/ethan.png\" alt=\"photo of ethan\" class=\"gallery__img\" (click)='changeText($event, \"ethan\", \"ethan-info1\")'>\n      <div class=\"name-image\"> \n        Ethan Bodnar\n      </div>\n      <div class=\"text-image\">\n        Co-head of Software Development\n      </div>\n      <a id=\"ethan-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/andrew.jpg\" alt=\"photo of andrew\" class=\"gallery__img\" (click)='changeText($event, \"andrew\", \"andrew-info1\")'>\n      <div class=\"name-image\"> \n        Andrew Markham\n      </div>\n      <div class=\"text-image\">\n        Co-head of Materials\n      </div>\n      <a id=\"andrew-info1\" class=\"subtext\"></a>\n    </figure>\n  </div>\n  <div class=\"gallery\" id=\"gallery-3\">\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/anthony.png\" alt=\"photo of anthony\" class=\"gallery__img\" (click)='changeText($event, \"anthony\", \"tony-info1\")'>\n      <div class=\"name-image\"> \n        Anthony De Rango\n      </div>\n      <div class=\"text-image\">\n        Co-head of Materials\n      </div>\n      <a id=\"tony-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/lauren.jpg\" alt=\"photo of lauren\" class=\"gallery__img\" (click)='changeText($event, \"lauren\", \"lauren-info1\")'>\n      <div class=\"name-image\"> \n        Lauren Andersen\n      </div>\n      <div class=\"text-image\">\n        Co-head of Mould\n      </div>\n      <a id=\"lauren-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/keston.png\" alt=\"photo of keston\" class=\"gallery__img\" (click)='changeText($event, \"keston\", \"keston-info1\")'>\n      <div class=\"name-image\"> \n        Keston Anderson\n      </div>\n      <div class=\"text-image\">\n        Co-head of Mould\n      </div>\n      <a id=\"keston-info1\" class=\"subtext\"></a>\n    </figure>\n  </div>\n  <div class=\"gallery\" id=\"gallery-4\">\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/liam.jpg\" alt=\"photo of liam\" class=\"gallery__img\" (click)='changeText($event, \"liam\", \"liam-info1\")'>\n      <div class=\"name-image\"> \n        Liam Israels\n      </div>\n      <div class=\"text-image\">\n        Co-head of Design and Analysis\n      </div>\n      <a id=\"liam-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/jen.jpg\" alt=\"photo of jennifer\" class=\"gallery__img\" (click)='changeText($event, \"jen\", \"jen-info1\")'>\n      <div class=\"name-image\"> \n        Jennifer Oliva\n      </div>\n      <div class=\"text-image\">\n        Co-head of Design and Analysis\n      </div>\n      <a id=\"jen-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/trevor.png\" alt=\"photo of trevor\" class=\"gallery__img\" (click)='changeText($event, \"trevor\", \"trevor-info1\")'>\n      <div class=\"name-image\"> \n        Trevor Stone\n      </div>\n      <div class=\"text-image\">\n        Co-head of Research and Development\n      </div>\n      <a id=\"trevor-info1\" class=\"subtext\"></a>\n    </figure>\n  </div>\n  <div class=\"gallery\" id=\"gallery-5\">\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/jericho.png\" alt=\"photo of jericho\" class=\"gallery__img\" (click)='changeText($event, \"jericho\", \"jericho-info1\")'>\n      <div class=\"name-image\"> \n        Jericho Salvador\n      </div>\n      <div class=\"text-image\">\n        Co-head of Research and Development\n      </div>\n      <a id=\"jericho-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/kara.png\" alt=\"photo of kara\" class=\"gallery__img\" (click)='changeText($event, \"kara\", \"kara-info1\")'>\n      <div class=\"name-image\"> \n        Kara Bjornson\n      </div>\n      <div class=\"text-image\">\n        Head of Technical Writing\n      </div>\n      <a id=\"kara-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/sierra.jpg\" alt=\"photo of sierra\" class=\"gallery__img\" (click)='changeText($event, \"sierra\", \"sierra-info1\")'>\n      <div class=\"name-image\"> \n        Sierra Goss\n      </div>\n      <div class=\"text-image\">\n        Head of Technical Presentation\n      </div>\n      <a id=\"sierra-info1\" class=\"subtext\"></a>\n    </figure>\n  </div>\n  <div class=\"gallery\" id=\"gallery-6\">\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/sam.png\" alt=\"photo of sam\" class=\"gallery__img\" (click)='changeText($event, \"sam\", \"sam-info1\")'>\n      <div class=\"name-image\"> \n        Sam Goertz\n      </div>\n      <div class=\"text-image\">\n        Training Coordinator\n      </div>\n      <a id=\"sam-info1\" class=\"subtext\"></a>\n    </figure>\n    <figure class=\"gallery__item\">\n      <img src=\"assets/execphotos/mac.png\" alt=\"photo of mac\" class=\"gallery__img\" (click)='changeText($event, \"mac\", \"mac-info1\")'>\n      <div class=\"name-image\"> \n        Mac McGauley\n      </div>\n      <div class=\"text-image\">\n        Head of Graphic Design\n      </div>\n      <a id=\"mac-info1\" class=\"subtext\"></a>\n    </figure>\n  </div>  \n  -->\n\n  <hr>\n  <br> \n\n  <a id=\"mailing\" name = \"mailing\" class=\"titles\" style=\"font-weight: bold; font-size: 5vmin;\">Get Involved!</a>\n  <p class=\"para\" style=\"margin-top: -5vmin;\">Join our mailing list to learn more about the team, be reminded <br> when executive applications are released, and more!</p>\n  <br>\n  <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfAhUEsZXuzODvFPsFJ_TORCHdrVK9Aj5osvyYXLS38__DvZQ/viewform?embedded=true\" width=\"640\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" class=\"center1\">Loading…</iframe>\n  <br><br>\n  <hr>\n\n  <!--\n<mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Will Stevenson</mat-card-title>\n              <mat-card-subtitle>Construction Captain</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/will.png\" alt=\"photo of will\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                wecca.construction@gmail.com <br>\n                I provide guidance for some exec positions, make sure we have inventory for the mixes and that we have time allocated for use of the structures lab,\n                and make the bridge between industry and the club in order to ensure the canoe is constructed!\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Megan Ginham</mat-card-title>\n              <mat-card-subtitle>Logistics Captain</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/megan.jpg\" alt=\"photo of megan\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                wecca.logistics@gmail.com <br>\n                My biggest responsibilities include recruitment, running the biweekly meetings, plan the logistics behind wecca going to competition, and basically help anyone in thrive in WECCA to their full extent!\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Sneha Patel</mat-card-title>\n              <mat-card-subtitle>Finance Captain</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/sneha.jpg\" alt=\"photo of sneha\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                wecca.sponsorship@gmail.com <br>\n                I manage WECCA's finances and I fund our events.\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Anuj Kulkarni</mat-card-title>\n              <mat-card-subtitle>Co-head of Software Development</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/anuj.png\" alt=\"photo of anuj\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Ethan Bodnar</mat-card-title>\n              <mat-card-subtitle>Co-head of Software Development</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/ethan.png\" alt=\"photo of ethan\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=\"center1\">\n              <mat-card-title>Andrew Markham</mat-card-title>\n              <mat-card-subtitle>Co-head of Materials</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/andrew.jpg\" alt=\"photo of andrew\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Anthony De Rango</mat-card-title>\n              <mat-card-subtitle>Co-head of Materials</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/anthony.png\" alt=\"photo of anthony\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Lauren Andersen</mat-card-title>\n              <mat-card-subtitle>Co-head of Mould</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/lauren.jpg\" alt=\"photo of lauren\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Keston Anderson</mat-card-title>\n              <mat-card-subtitle>Co-head of Mould</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/keston.png\" alt=\"photo of keston\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Trevor Stone</mat-card-title>\n              <mat-card-subtitle>Co-head of Research and Development</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/trevor.png\" alt=\"photo of trevor\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Jericho Salvador</mat-card-title>\n              <mat-card-subtitle>Co-head of Research and Development</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/jericho.png\" alt=\"photo of jericho\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <mat-card class=\"captain\">\n            <mat-card-header class=center1>\n              <mat-card-title>Kara Bjornson</mat-card-title>\n              <mat-card-subtitle>Head of Technical Writing</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"assets/execphotos/kara.png\" alt=\"photo of kara\" class=\"center\">\n            <mat-card-content>\n              <p class=align>\n                Description here...\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-card class=\"captain\">\n          <mat-card-header class=center1>\n            <mat-card-title>Sierra Goss</mat-card-title>\n            <mat-card-subtitle>Head of Technical Presentation</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"assets/execphotos/sierra.jpg\" alt=\"photo of sierra\" class=\"center\">\n          <mat-card-content>\n            <p class=align>\n              Description here...\n            </p>\n          </mat-card-content>\n        </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card class=\"captain\">\n        <mat-card-header class=center1>\n          <mat-card-title>Sam Goertz</mat-card-title>\n          <mat-card-subtitle>Training Coordinator</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"assets/execphotos/sam.png\" alt=\"photo of sam\" class=\"center\">\n        <mat-card-content>\n          <p class=align>\n            Description here...\n          </p>\n        </mat-card-content>\n      </mat-card>\n</mat-grid-tile>\n<mat-grid-tile>\n  <mat-card class=\"captain\">\n      <mat-card-header class=center1>\n        <mat-card-title>Mac McGauley</mat-card-title>\n        <mat-card-subtitle>Head of Graphic Design</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/execphotos/mac.png\" alt=\"photo of mac\" class=\"center\">\n      <mat-card-content>\n        <p class=align>\n          Description here...\n        </p>\n      </mat-card-content>\n    </mat-card>\n</mat-grid-tile>\n<mat-grid-tile>\n  <mat-card class=\"captain\">\n      <mat-card-header class=center1>\n        <mat-card-title>Liam Israels</mat-card-title>\n        <mat-card-subtitle>Co-head of Design and Analysis</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/execphotos/liam.jpg\" alt=\"photo of liam\" class=\"center\">\n      <mat-card-content>\n        <p class=align>\n          Description here...\n        </p>\n      </mat-card-content>\n    </mat-card>\n</mat-grid-tile>\n<mat-grid-tile>\n  <mat-card class=\"captain\">\n      <mat-card-header class=center1>\n        <mat-card-title>TBD</mat-card-title>\n        <mat-card-subtitle>Co-head of Design and Analysis</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/execphotos/rawad.jpg\" alt=\"photo of TBD\" class=\"center\">\n      <mat-card-content>\n        <p class=align>\n          Description here...\n        </p>\n      </mat-card-content>\n    </mat-card>\n</mat-grid-tile>\n  </mat-grid-list>\n\n-->\n<br>\n<br>\n<br>\n</body>\n\n<footer>\n\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div id=\"home-screen\">  \n    <div class=\"container vertical-center horizontal-center\">    \n        <h1 id=\"title\" class=\"animate__animated animate__fadeInDown\">Western Engineering Concrete Canoe Association</h1>\n        <p id=\"sub\" class=\"animate__animated animate__fadeIn\">What floats your boat?</p>\n    </div>\n  </div>\n\n<div id=\"about-panel\">  \n  <div class=\"container vertical-center horizontal-center\">  \n      <div class=\"row\">\n          <div class=\"col-4 vertical-center horizontal-center\">\n              <h1 data-aos=\"fade-right\" data-aos-duration=\"1000\">What is WECCA?</h1>\n          </div>  \n          <div class=\"col-8\">\n              <p data-aos=\"fade-up\" data-aos-duration=\"800\" class=\"description\">The Western Engineering Concrete Canoe Association, also known as <span class=\"accent\"><b>WECCA</b></span>, is a team of talented and driven \n                students who come together each year to design and build a <span class=\"accent\"><b>concrete canoe</b></span>. Members participate in concrete mix design, \n                mold development, and canoe theme creation. All this culminates in the Canadian National Concrete Canoe Competition where \n                canoes from across the country are showcased and raced. Founded in 2007, WECCA annually competes at the Canadian National Concrete Canoe Competition. \n                  A team of Western University students come together to design, test, and cast a concrete canoe to be raced at the end of the school year. \n                  WECCA is continuously working to improve canoe design and performance to achieve future success. <span class=\"accent2\"><b>Canoe floats our boats, what floats yours?</b></span>\n              </p>\n          </div>\n      </div>\n  </div>\n</div>\n\n\n<!--Slideshow of team pictures-->\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"assets/images/casting-day-team.JPG\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/canoe-on-water.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/casting-day-canoe.JPG\" alt=\"Third slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"assets/images/canoe-on-land.jpg\" alt=\"Fourth slide\">\n      </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<!--Meet the Leaders-->\n<div id=\"meet-team\" >  \n  <h1 class=\"center-sub\" data-aos=\"fade-up\" data-aos-duration=\"1000\">Meet our Leaders</h1>  \n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <a href=\"assets/execphotos/will.png\" data-toggle=\"lightbox\"  data-title=\"Will Stevenson\" data-footer=\"Construction Captain\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n          <figure>\n            <img src=\"assets/execphotos/will.png\" class=\"img-fluid\">   \n            <figcaption>Will</figcaption>\n          </figure>                           \n        </a>\n        \n        <a href=\"assets/execphotos/megan.jpg\" data-toggle=\"lightbox\"  data-title=\"Megan Ginham\" data-footer=\"Logistics Captain\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n          <figure>\n            <img src=\"assets/execphotos/megan.jpg\" class=\"img-fluid\">   \n            <figcaption>Megan</figcaption>\n          </figure>                           \n        </a>\n        \n        <a href=\"assets/execphotos/sneha.jpg\" data-toggle=\"lightbox\"  data-title=\"Sneha Patel\" data-footer=\"Finance Captain\" data-gallery=\"my-gallery\" class=\"col-sm-4 static-text\">\n          <figure>\n            <img src=\"assets/execphotos/sneha.jpg\" class=\"img-fluid\">   \n            <figcaption>Sneha</figcaption>\n          </figure>                           \n        </a>\n      </div>\n    </div>\n  </div>        \n</div>\n\n<!--Announcements and events-->\n<div id=\"socialMedia\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <h1 class=\"center-sub\" data-aos=\"fade-up\" data-aos-duration=\"1000\">Find us on Social Media!</h1>\n  <ul class=\"vertical-center\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n    <a href=\"https://www.facebook.com/groups/WECCA.2019.2020\" class=\"fa fa-facebook\"></a>\n    <a href=\"#\" class=\"fa fa-twitter\"></a>\n    <a href=\"https://www.instagram.com/wecca.uwo/\" class=\"fa fa-instagram\"></a>\n  </ul>\n</div>\n\n<!-- Contact-->\n<div id=\"contact\" class=\"padding\">  \n  <div class=\"container vertical-center horizontal-center\">  \n      <div class=\"row\">\n          <div class=\"col-4 vertical-center horizontal-center\">\n              <h1 data-aos=\"fade-right\" data-aos-duration=\"1000\">Contact Us</h1>\n          </div>  \n          <div data-aos=\"fade-left\" data-aos-duration=\"1000\" class=\"col-8\">\n            <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeNn1YAkuz-HVpITjA2h31XQ6NSRSDR7kwDKwpe-ypvKTtang/viewform?embedded=true\" width=\"50%\" height=\"570\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" class=\"center-iframe\">Loading…</iframe>\n          </div>\n      </div>\n  </div>\n</div>\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <div class=\"gap-20\"></div>\n  <div style=\"text-align:center\">\n    <h1> <b>WECCA'S DONORS AND SPONSORS</b></h1>\n  </div>\n  <div class=\"gap-10\"></div>\n  \n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  \n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"mySlides1\" src=\"https://uwowecca.files.wordpress.com/2020/08/wbulgeryoung-2.png\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <a href=\"https://csce.ca/en/\">\n          <img class=\"mySlides2\" src=\"https://uwowecca.files.wordpress.com/2020/08/wcsge-2.png\" alt=\"Second slide\">\n        </a>\n        </div>\n        <div class=\"carousel-item\">\n          <a href=\"http://bremor.ca/\">\n          <img class=\"mySlides3\" src=\"https://uwowecca.files.wordpress.com/2020/08/wbremor-1.png\" alt=\"Third slide\">\n          </a>\n        </div>\n        <div class=\"carousel-item\">\n          <a href=\"http://www.cornerarch.com/\">\n          <img class=\"mySlides4\" src=\"https://uwowecca.files.wordpress.com/2020/08/wcornerstone-1.png\" alt=\"Fourth slide\">\n        </a>\n        </div>\n        <div class=\"carousel-item\">\n          <a href= \"http://www.norliteagg.com/production/\">\n          <img class=\"mySlides5\" src=\"https://i.imgur.com/9Qlg5EC.png\" alt=\"Fifth slide\">\n        </a>\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n<div class=\"gap-10\"></div>\n<hr style = \"width:70%; height: 3px; color:rgb(138, 43, 226); background-color: rgb(138, 43, 226);\">\n\n\n<div>\n  <article>\n\n    <ul>\n      <li class=\"bg-purple\">\n        <button>Purple</button>\n      </li>\n      <li class=\"bg-blue\">\n        <button>Bronze</button>\n      </li>\n      <li class=\"bg-blue active\">\n        <button>Silver</button>\n      </li>\n      <li class=\"bg-blue\">\n        <button>Gold</button>\n      </li>\n    </ul>  \n    \n    <table>\n      <thead>\n        <tr>\n          <th class=\"hide\"></th>\n          <th class=\"bg-purple\">Purple Sponsors - $500-649</th>\n          <th class=\"bg-bronze\">Bronze Sponsors - $650-999</th>\n          <th class=\"bg-silver default\">Silver Sponsors - $1000-1499</th>\n          <th class=\"bg-gold\">Gold Sponsors - $1500+</th>\n        </tr>\n      </thead>\n      <tbody>\n        \n        <tr>\n          <td>Logo on team competition T-Shirt</td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td class=\"default\"><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n        </tr>\n        <tr>\n          <td>Logo and website link on team website</td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td class=\"default\"><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n        </tr>\n        <tr>\n          <td>Recognition on team social media</td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td class=\"default\"><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n        </tr>\n        <tr>\n          <td>50cmx50cm logo on team trailer</td>\n          <td></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n          <td class=\"default\"><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n        </tr>\n        <tr>\n          <td>Sponsorship plaque</td>\n          <td></td>\n          <td></td>\n          <td class=\"default\"><span class=\"tick\">&#10004;</span></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n        </tr>\n        <tr>\n          <td>Canoe and WECCA members available for promotional events (schedule permitting)</td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td><span class=\"tick\">&#10004;</span></td>\n        </tr>\n      </tbody>\n    </table>\n      \n    </article> \n\n</div>\n<div class=\"gap-21\"></div>\n<div><hr style = \"width:70%; height: 3px; color:rgb(138, 43, 226); background-color: rgb(138, 43, 226);\">\n</div>\n\n<div id= \"bottom\"> \n<p>We appreciate any sponsors and donors! Follow this link to support <a href=\"https://www.westernconnect.ca/site/SPageNavigator/ConcreteCanoe.html;jsessionid=00000000.app20053a?NONCE_TOKEN=7B52498F392D488FE26B5149214DC771\" >WECCA</a></p>\n\n<p>Contact Sneha Patel for more information:</p>\n\n<p>Phone: 613-403-2000</p>\n\n<p>Email: <a href=\"mailto:wecca.sponsorship@gmail.com\">wecca.sponsorship@gmail.com</a></p>\n<div class=\"gap-10\"></div>\n<hr style = \"width:70%; height: 3px; color:rgb(138, 43, 226); background-color: rgb(138, 43, 226);\">\n</div>\n\n</body>\n</html>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _execpage_execpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./execpage/execpage.component */ "./src/app/execpage/execpage.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");







const routes = [
    { path: "", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: "calendar", component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"] },
    { path: "executives", component: _execpage_execpage_component__WEBPACK_IMPORTED_MODULE_5__["ExecpageComponent"] },
    { path: "sponsorship", component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_6__["SponsorsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n   flex: 1 1 auto;\n\n  }\n\nbody {\n   font-family: \"Lato\", sans-serif;\n }\n\n/*.sidenav {\n   height: 100%;\n   width: 180px;\n   position: fixed;\n   z-index: 1;\n   top: 0;\n   left: 0;\n   background-color:rgb(121, 69, 189);\n   overflow-x: hidden;\n   padding-top: 20px;\n   border-radius: 25px;\n   border: 2px solid black;\n\n }\n \n .sidenav a {\n   padding: 6px 8px 6px 16px;\n   text-decoration: none;\n   font-size: 25px;\n   color: #818181;\n   display: block;\n }\n \n .sidenav a:hover {\n   color: #f1f1f1;\n }*/\n\n.main {\n  /* margin-left: 180px;  Same as the width of the sidenav */\n  font-size: 28px; /* Increased text to enable scrolling */\n  padding: 0px 0px;\n  width: 100%;\n  margin: auto;\n}\n\nheader{\n  background: rgb(121, 69, 189);\n }\n\nheader::after {\n   content : '';\n   display: table;\n   clear: both;\n }\n\n.logo-black{\n   float: left;\n   max-width: 6%;\n   height: auto;\n   padding-left: 100px;\n   padding-top: 9px;\n   padding-bottom : 10px;\n }\n\nnav{\n  float: right;\n}\n\nnav ul {\n  margin : 0;\n  padding : 0;\n  list-style: none;\n}\n\nnav li {\n  display: inline-block;\n  margin-left: 70px;\n  padding-top: 0px;\n\n  position: relative;\n}\n\nnav a {\n  color:black;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\nnav a:hover{\n  color: white;\n\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7R0FDbEQsY0FBYzs7RUFFZjs7QUFFRjtHQUNHLCtCQUErQjtDQUNqQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRTs7QUFFRjtFQUNDLDBEQUEwRDtFQUMxRCxlQUFlLEVBQUUsdUNBQXVDO0VBQ3hELGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVDO0VBQ0MsNkJBQTZCO0NBQzlCOztBQUVBO0dBQ0UsWUFBWTtHQUNaLGNBQWM7R0FDZCxXQUFXO0NBQ2I7O0FBRUE7R0FDRSxXQUFXO0dBQ1gsYUFBYTtHQUNiLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLHFCQUFxQjtDQUN2Qjs7QUFFQTtFQUNDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgZmxleDogMSAxIGF1dG87XG5cbiAgfVxuXG5ib2R5IHtcbiAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiB9XG4gXG4gLyouc2lkZW5hdiB7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICB3aWR0aDogMTgwcHg7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB6LWluZGV4OiAxO1xuICAgdG9wOiAwO1xuICAgbGVmdDogMDtcbiAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEyMSwgNjksIDE4OSk7XG4gICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICBwYWRkaW5nLXRvcDogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblxuIH1cbiBcbiAuc2lkZW5hdiBhIHtcbiAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICBmb250LXNpemU6IDI1cHg7XG4gICBjb2xvcjogIzgxODE4MTtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuIH1cbiBcbiAuc2lkZW5hdiBhOmhvdmVyIHtcbiAgIGNvbG9yOiAjZjFmMWYxO1xuIH0qL1xuXG4gLm1haW4ge1xuICAvKiBtYXJnaW4tbGVmdDogMTgwcHg7ICBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xuICBmb250LXNpemU6IDI4cHg7IC8qIEluY3JlYXNlZCB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcgKi9cbiAgcGFkZGluZzogMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuIGhlYWRlcntcbiAgYmFja2dyb3VuZDogcmdiKDEyMSwgNjksIDE4OSk7XG4gfVxuXG4gaGVhZGVyOjphZnRlciB7XG4gICBjb250ZW50IDogJyc7XG4gICBkaXNwbGF5OiB0YWJsZTtcbiAgIGNsZWFyOiBib3RoO1xuIH1cbiBcbiAubG9nby1ibGFja3tcbiAgIGZsb2F0OiBsZWZ0O1xuICAgbWF4LXdpZHRoOiA2JTtcbiAgIGhlaWdodDogYXV0bztcbiAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICBwYWRkaW5nLXRvcDogOXB4O1xuICAgcGFkZGluZy1ib3R0b20gOiAxMHB4O1xuIH1cblxuIG5hdntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5uYXYgdWwge1xuICBtYXJnaW4gOiAwO1xuICBwYWRkaW5nIDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubmF2IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4gXG5uYXYgYSB7XG4gIGNvbG9yOmJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxubmF2IGE6aG92ZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ekko_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ekko-lightbox */ "./node_modules/ekko-lightbox/dist/ekko-lightbox.min.js");
/* harmony import */ var ekko_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ekko_lightbox__WEBPACK_IMPORTED_MODULE_3__);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weccaWebsite';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
        $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, DemoModule, MyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModule", function() { return MyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _execpage_execpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./execpage/execpage.component */ "./src/app/execpage/execpage.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
            _execpage_execpage_component__WEBPACK_IMPORTED_MODULE_7__["ExecpageComponent"],
            _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"],
            _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_9__["SponsorsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbAlertModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__["adapterFactory"] })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);





let DemoModule = class DemoModule {
};
DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__["adapterFactory"],
            }),
        ],
        declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"]],
        exports: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"]],
    })
], DemoModule);

 // you may need to adjust the css import depending on your build tool
let MyModule = class MyModule {
};
MyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__["FlatpickrModule"].forRoot()]
    })
], MyModule);



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.block {\n  width: 100px;\n  display: inline-block; \n}\n\n​\n\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 10px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFBQzs7O0lBR0csY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbn3igItcblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: YourAppModule, DemoComponent, CalendarComponent, MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourAppModule", function() { return YourAppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponent", function() { return MyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");





class YourAppModule {
}

const colors = {
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
};
let DemoComponent = class DemoComponent {
    constructor(modal) {
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fas fa-fw fa-pencil-alt"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                },
            },
            {
                label: '<i class="fas fa-fw fa-trash-alt"></i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    this.events = this.events.filter((iEvent) => iEvent !== event);
                    this.handleEvent('Deleted', event);
                },
            },
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions,
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true,
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(new Date(), 2),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
        ];
        this.activeDayIsOpen = true;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            },
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter((event) => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
};
DemoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], DemoComponent.prototype, "modalContent", void 0);
DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-demo-component',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")).default]
    })
], DemoComponent);

let CalendarComponent = class CalendarComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")).default]
    })
], CalendarComponent);

let MyComponent = class MyComponent {
};
MyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <input 
      type="text" 
      mwlFlatpickr 
      [(ngModel)]="selectedDate" 
      [altInput]="true" 
      [convertModelValue]="true">
  `
    })
], MyComponent);



/***/ }),

/***/ "./src/app/execpage/execpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/execpage/execpage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n  mat-card-title {\n    text-align: center;\n\n  }\n  mat-card-subtitle {\n    text-align: center;\n\n  }\n  /* \n  img {\n    border-radius: 50%;\n    height: 210px;\n    width: 170px;\n  }\n  */\n  figcaption {\n    font-size: 2.5vmin;\n  }\n  p{\n    text-align: center;\n    font-size: 2vmin;\n    margin-top: 0vmin;\n    margin-bottom: 0vmin;\n    padding-top: 50px;\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n  hr{\n    width:70%;\n    height: 1px;\n    color:rgb(138, 43, 226); \n    background-color: rgb(138, 43, 226);\n  }\n  .align {\n    display: block;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    width: 95%;\n  }\n  .titles {\n    display: block;\n    text-align: center;\n    justify-content: center;\n    margin: 0 auto;\n    font-weight: bold;\n    font-size: 5vmin;\n  }\n  .center1 {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 60%;\n  }\n  .center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n  }\n  mat-card {\n    width: calc(100% - 70px);\n    height: 400px;\n    color: black;\n  }\n  .mat-card {\n    padding: 0px;\n    background-color: white;\n\n  }\n  .gallery {\n    display: grid;\n    margin: 0vmin;\n    row-gap: 10vmin;\n    -moz-column-gap: 15vmin;\n         column-gap: 15vmin;\n    grid-template-columns: 30vmin 30vmin 30vmin;\n    grid-template-rows: 45vmin;\n    justify-content: center;\n    align-content: space-evenly;\n  }\n  .gallery__img{\n    width: 30vmin;\n    height: 30vmin;\n    -o-object-fit: cover;\n       object-fit: cover;\n    text-align: center;\n    justify-content: center;\n    border: 1px solid rgb(138, 43, 226);\n    float: left;\n  }\n  .text-image {\n    font-size: 18px;\n    display: block;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    color: black;\n  }\n  .subtext {\n    font-size: 18px;\n    display: block;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    color: black;\n  }\n  .name-image {\n    font-size: 20px;\n    font-weight: bold;\n    display: block;\n    text-align: center;\n    padding-top: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    color: black;\n  }\n  .para {\n    font-size: 2.5vmin;\n    text-align: center;\n    justify-content: center;\n    margin: auto;\n  }\n  /*\n  div.img {\n    margin: 0px;\n    padding: 0px;\n    border-radius: 50%;\n    text-align: center;\n    height: 0px;\n    width: 0px;\n    float: left;\n  }\n  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlY3BhZ2UvZXhlY3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxrQkFBa0I7O0VBRXBCO0VBQ0E7SUFDRSxrQkFBa0I7O0VBRXBCO0VBQ0E7Ozs7OztHQU1DO0VBQ0Q7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsWUFBWTtFQUNkO0VBRUE7SUFDRSxZQUFZO0lBQ1osdUJBQXVCOztFQUV6QjtFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQWtCO1NBQWxCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QiwyQkFBMkI7RUFDN0I7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxXQUFXO0VBQ2I7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBR0E7Ozs7Ozs7Ozs7R0FVQyIsImZpbGUiOiJzcmMvYXBwL2V4ZWNwYWdlL2V4ZWNwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4gIG1hdC1jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgfVxuICBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIH0gXG4gIC8qIFxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgfVxuICAqL1xuICBmaWdjYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDIuNXZtaW47XG4gIH1cbiAgcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAydm1pbjtcbiAgICBtYXJnaW4tdG9wOiAwdm1pbjtcbiAgICBtYXJnaW4tYm90dG9tOiAwdm1pbjtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICB9XG4gIGhye1xuICAgIHdpZHRoOjcwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBjb2xvcjpyZ2IoMTM4LCA0MywgMjI2KTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOCwgNDMsIDIyNik7XG4gIH1cbiAgLmFsaWduIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgLnRpdGxlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNXZtaW47XG4gIH1cbiAgLmNlbnRlcjEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgbWF0LWNhcmQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5tYXQtY2FyZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIH1cblxuICAuZ2FsbGVyeSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDB2bWluO1xuICAgIHJvdy1nYXA6IDEwdm1pbjtcbiAgICBjb2x1bW4tZ2FwOiAxNXZtaW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHZtaW4gMzB2bWluIDMwdm1pbjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1dm1pbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICAuZ2FsbGVyeV9faW1ne1xuICAgIHdpZHRoOiAzMHZtaW47XG4gICAgaGVpZ2h0OiAzMHZtaW47XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzgsIDQzLCAyMjYpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAudGV4dC1pbWFnZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnN1YnRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5uYW1lLWltYWdlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5wYXJhIHtcbiAgICBmb250LXNpemU6IDIuNXZtaW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG5cbiAgLypcbiAgZGl2LmltZyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/execpage/execpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/execpage/execpage.component.ts ***!
  \************************************************/
/*! exports provided: ExecpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecpageComponent", function() { return ExecpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExecpageComponent = class ExecpageComponent {
    constructor() { }
    //we could use a dictionary here
    ngOnInit() {
    }
    //I will look into dictionaries, for now I just wanted to get this function working
    /*
    Function to change the text under the executive description as well as the height of the gallery box on click
    */
    changeText(event, name, id) {
        var text;
        var info = document.getElementById(id).innerHTML;
        var tag = "";
        var ind = 0;
        if (name == 'will' || name == 'megan' || name == 'sneha') {
            tag = "gallery-1";
        }
        else if (name == "anuj" || name == "ethan" || name == "andrew") {
            tag = "gallery-2";
        }
        else if (name == "anthony" || name == "lauren" || name == "keston") {
            tag = "gallery-3";
        }
        else if (name == "liam" || name == "jen" || name == "trevor") {
            tag = "gallery-4";
        }
        else if (name == "jericho" || name == "kara" || name == "sierra") {
            tag = "gallery-5";
        }
        else if (name == "sam" || name == "mac") {
            tag = "gallery-6";
        }
        if (name == 'will' && info == '') {
            text = "Insert Will's Description";
        }
        else if (name == 'megan' && info == '') {
            text = "Insert Megan's Description";
        }
        else if (name == 'sneha' && info == '') {
            text = "Insert Sneha's Description";
        }
        else if (name == 'anuj' && info == '') {
            text = "Insert Anuj's Description";
        }
        else if (name == 'ethan' && info == '') {
            text = "Insert Ethan's Description; here is what a multi line description would look like here";
        }
        else if (name == 'andrew' && info == '') {
            text = "Indert Andrew's Description";
        }
        else if (name == 'anthony' && info == '') {
            text = "Insert Anthony's Description";
        }
        else if (name == 'lauren' && info == '') {
            text = "Insert Lauren's Description";
        }
        else if (name == 'keston' && info == '') {
            text = "Indert Keston's Description";
        }
        else if (name == 'liam' && info == '') {
            text = "Insert Liam's Description";
        }
        else if (name == 'jen' && info == '') {
            text = "Insert Jen's Description";
        }
        else if (name == 'trevor' && info == '') {
            text = "Insert Trevor's Description";
        }
        else if (name == 'jericho' && info == '') {
            text = "Insert Jericho's Description";
        }
        else if (name == 'kara' && info == '') {
            text = "Insert Kara's Description";
        }
        else if (name == 'sierra' && info == '') {
            text = "Insert Sierra's Description";
        }
        else if (name == 'sam' && info == '') {
            text = "Insert Sam's Description";
        }
        else if (name == 'mac' && info == '') {
            text = "Insert Mac's Description";
        }
        else {
            text = '';
        }
        document.getElementById(id).innerHTML = text;
        if (text != '') {
            document.getElementById(tag).style.gridTemplateRows = "55vmin";
        }
        else {
            var rowNum = Number(tag.slice(8, 9));
            var elemMin = 1;
            if (rowNum > 1) {
                elemMin = ((rowNum - 1) * 3);
            }
            else {
                elemMin = 0;
            }
            if (rowNum < 6) {
                var inc = 3;
            }
            else {
                inc = 2;
            }
            var IDs = document.getElementsByClassName('subtext');
            for (var i = elemMin; i < elemMin + inc; i++) {
                if (IDs[i].innerHTML != '') {
                    ind++;
                }
            }
            if (ind == 0) {
                document.getElementById(tag).style.gridTemplateRows = "45vmin";
            }
            else {
                document.getElementById(tag).style.gridTemplateRows = "55vmin";
            }
        }
    }
};
ExecpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-execpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./execpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/execpage/execpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./execpage.component.css */ "./src/app/execpage/execpage.component.css")).default]
    })
], ExecpageComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n    background-color: #ffffff;\n    border-color: rgb(138, 43, 226);\n    border-radius:14px;\n    color:  rgb(138, 43, 226);\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    margin-left: 45%;\n    margin-right:40%;\n}\nh2{\n    border: none;\n    color: black;\n    text-align: center;\n}\nli{\n    font-size: 3vmin;\n    margin-top: 0vmin;\n    margin-bottom: 2vmin;\n}\nul{\n    display: inline;\n    text-align: center;\n    margin-top: -1vmin; \n    margin-bottom: -1vmin;\n}\n.wecca-members{\n    display: block;\n    width: 600px;\n    height: 400px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.titles {\n    display: block;\n    text-align: center;\n    justify-content: center;\n    margin: 0 auto;\n    margin-bottom: 0vmin;\n    font-weight: bold;\n    font-size: 4vmin;\n  }\nhr{\n    width:70%;\n    height: 1px;\n    color:rgb(138, 43, 226); \n    background-color: rgb(138, 43, 226);\n    margin-top: 5vmin;\n    margin-bottom: 5vmin;\n}\n/* Style all font awesome icons */\n.vertical-center  {\n    \n}\n.fa {\n    position: relative;\n    margin-left: 200px;\n    padding: 20px;\n    font-size: 40px;\n    width: 75px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 45%;\n  }\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n    color: rgb(82, 66, 139);\n  }\n/* Set a specific color for each brand */\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0FBR0Esd0NBQXdDIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMzgsIDQzLCAyMjYpO1xuICAgIGJvcmRlci1yYWRpdXM6MTRweDtcbiAgICBjb2xvcjogIHJnYigxMzgsIDQzLCAyMjYpO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xuICAgIG1hcmdpbi1yaWdodDo0MCU7XG59XG5oMntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGl7XG4gICAgZm9udC1zaXplOiAzdm1pbjtcbiAgICBtYXJnaW4tdG9wOiAwdm1pbjtcbiAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcbn1cbnVse1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTF2bWluOyBcbiAgICBtYXJnaW4tYm90dG9tOiAtMXZtaW47XG59IFxuLndlY2NhLW1lbWJlcnN7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRpdGxlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDB2bWluO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNHZtaW47XG4gIH1cbmhye1xuICAgIHdpZHRoOjcwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBjb2xvcjpyZ2IoMTM4LCA0MywgMjI2KTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOCwgNDMsIDIyNik7XG4gICAgbWFyZ2luLXRvcDogNXZtaW47XG4gICAgbWFyZ2luLWJvdHRvbTogNXZtaW47XG59XG5cbi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi52ZXJ0aWNhbC1jZW50ZXIgIHtcbiAgICBcbn1cblxuLmZhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNDUlO1xuICB9XG4gIFxuICAvKiBBZGQgYSBob3ZlciBlZmZlY3QgaWYgeW91IHdhbnQgKi9cbiAgLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY29sb3I6IHJnYig4MiwgNjYsIDEzOSk7XG4gIH1cblxuICBcbiAgLyogU2V0IGEgc3BlY2lmaWMgY29sb3IgZm9yIGVhY2ggYnJhbmQgKi9cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/sponsors/sponsors.component.css":
/*!*************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  #purple{\n    color: rgb(138, 43, 226);\n    text-align: center;\n  }\n\n  #bronze{\n    color: #b08d57;\n    text-align: center;\n  }\n\n  #silver{\n    color: #808080; \n    text-align: center;\n  }\n\n  #gold{\n    color: goldenrod;\n    text-align: center;\n  }\n\n  .containe{\n    float: left;\n    width: 25%;\n  }\n\n  .column {\n    border: 5px solid rgb(138, 43, 226);\n    border-radius: 10px;\n  }\n\n  .column2 {\n    border: 5px solid #b08d57;\n    border-radius: 10px;\n  }\n\n  .column3 {\n    border: 5px solid\t#808080;\n    border-radius: 10px;\n  }\n\n  .column4 {\n    border: 5px solid goldenrod;\n    border-radius: 10px;\n  }\n\n  /* Clear floats after the columns */\n\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  .gap-20{\n    width: 100%;\n    height: 100px;\n    }\n\n  .gap-21{\n    width: 100%;\n    height: 300px;\n    }\n\n  .gap-22{\n    width: 100%;\n    height: 370px;\n      }\n\n  .gap-10{\n      width: 100%;\n      height: 20px;\n      }\n\n  .gap-15{\n    width: 100%;\n    height: 50px;\n  }\n\n  .gap-25{\n    width: 100%;\n    height: 500px;\n  }\n\n  #center{\n    text-align: center;\n  }\n\n  ul {\n      text-align: center;\n      list-style-position: inside;\n      font-size: 23px;\n  }\n\n  #bottom{\n    text-align: center;\n    font-size: 23px;\n  }\n\n  .carousel-caption {\n    color: black;\n  }\n\n  .mySlides1 {\n    text-align: center;\n    height: 55%;\n    width: 55%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 153px;\n    margin-top: 153px;\n  }\n\n  .mySlides2 {\n    text-align: center;\n    height: 20%;\n    width: 20%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .mySlides3 {\n    text-align: center;\n    height: 55%;\n    width: 55%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 75.5px;\n    margin-top: 75.5px;\n  }\n\n  .mySlides4 {\n    text-align: center;\n    height: 60%;\n    width: 60%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 126px;\n    margin-top: 126px;\n  }\n\n  .mySlides5 {\n    text-align: center;\n    height: 40%;\n    width: 40%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 7.5px;\n    margin-top: 7.5px;\n  }\n\n  .container{\n    box-sizing:border-box;\n    padding:0;\n    margin:0;\n     outline: 0;\n  }\n\n  body { \n\n    font-size:14px;\n    padding:14px;\n  }\n\n  article {\n    width:100%;\n    max-width:1750px;\n    margin:0 auto;\n    height:150px;\n    position:relative;\n  }\n\n  ul {\n    display:flex;\n    top:0px;\n    z-index:10;\n    padding-bottom:14px;\n  }\n\n  li {\n    list-style:none;\n    flex:1;\n  }\n\n  li:last-child {\n    border-right:1px solid #DDD;\n  }\n\n  button {\n    width:100%;\n    border: 1px solid #DDD;\n    border-right:0;\n    border-top:0;\n    padding: 10px;\n    background:#FFF;\n    font-size:14px;\n    font-weight:bold;\n    height:60px;\n    color:#999\n  }\n\n  li.active button {\n    background:#F5F5F5;\n    color:#000;\n  }\n\n  table { border-collapse:collapse; table-layout:fixed; width:100%; }\n\n  th { background:#F5F5F5; display:none; }\n\n  td, th {\n    height:53px\n  }\n\n  td,th { border:1px solid #DDD; padding:10px; empty-cells:show; }\n\n  td,th {\n    text-align:left;\n  }\n\n  td+td, th+th {\n    text-align:center;\n    display:none;\n  }\n\n  td.default {\n    display:table-cell;\n  }\n\n  .bg-purple {\n    border-top:3px solid rgb(138, 43, 226);\n  }\n\n  .bg-bronze {\n    border-top:3px solid #b08d57;\n  }\n\n  .bg-silver {\n    border-top:3px solid #808080;\n  }\n\n  .bg-gold {\n    border-top:3px solid goldenrod;\n  }\n\n  .sep {\n    background:#F5F5F5;\n    font-weight:bold;\n  }\n\n  .txt-l { font-size:28px; font-weight:bold; }\n\n  .txt-top { position:relative; top:-9px; left:-2px; }\n\n  .tick { font-size:18px; color:#2CA01C; }\n\n  .hide {\n    border:0;\n    background:none;\n  }\n\n  @media (min-width: 640px) {\n    ul {\n      display:none;\n    }\n    td,th {\n      display:table-cell !important;\n    }\n    td,th {\n      width: 330px;\n    \n    }\n    td+td, th+th {\n      width: auto;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjs7RUFDQSxtQ0FBbUM7O0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiOztFQUVGO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYjs7RUFFRjtJQUNFLFdBQVc7SUFDWCxhQUFhO01BQ1g7O0VBRUo7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaOztFQUNKO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsMkJBQTJCO01BQzNCLGVBQWU7RUFDbkI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsUUFBUTtLQUNQLFVBQVU7RUFDYjs7RUFDQTs7SUFFRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixNQUFNO0VBQ1I7O0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7O0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDtFQUNGOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFDQSxRQUFRLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRTs7RUFDbEUsS0FBSyxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7O0VBQ3ZDO0lBQ0U7RUFDRjs7RUFDQSxRQUFRLHFCQUFxQixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRTs7RUFDL0Q7SUFDRSxlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHNDQUFzQztFQUN4Qzs7RUFDQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBQ0EsU0FBUyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUU7O0VBQzNDLFdBQVcsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTs7RUFDbkQsUUFBUSxjQUFjLEVBQUUsYUFBYSxFQUFFOztFQUN2QztJQUNFLFFBQVE7SUFDUixlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0UsWUFBWTs7SUFFZDtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAjcHVycGxle1xuICAgIGNvbG9yOiByZ2IoMTM4LCA0MywgMjI2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjYnJvbnple1xuICAgIGNvbG9yOiAjYjA4ZDU3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICNzaWx2ZXJ7XG4gICAgY29sb3I6ICM4MDgwODA7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICNnb2xke1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhaW5le1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTM4LCA0MywgMjI2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5jb2x1bW4yIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjYjA4ZDU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmNvbHVtbjMge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkXHQjODA4MDgwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmNvbHVtbjQge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdvbGRlbnJvZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuICAucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLmdhcC0yMHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAuZ2FwLTIxe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuXG4gIC5nYXAtMjJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICAgIH1cblxuICAuZ2FwLTEwe1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB9XG4gIC5nYXAtMTV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5nYXAtMjV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICAjY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgdWwge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG4gICNib3R0b217XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubXlTbGlkZXMxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1NSU7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTUzcHg7XG4gICAgbWFyZ2luLXRvcDogMTUzcHg7XG4gIH1cbiAgLm15U2xpZGVzMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5teVNsaWRlczMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICB3aWR0aDogNTUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA3NS41cHg7XG4gICAgbWFyZ2luLXRvcDogNzUuNXB4O1xuICB9XG4gIC5teVNsaWRlczQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMjZweDtcbiAgICBtYXJnaW4tdG9wOiAxMjZweDtcbiAgfVxuICAubXlTbGlkZXM1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gICAgbWFyZ2luLXRvcDogNy41cHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXJ7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICAgb3V0bGluZTogMDtcbiAgfVxuICBib2R5IHsgXG5cbiAgICBmb250LXNpemU6MTRweDtcbiAgICBwYWRkaW5nOjE0cHg7XG4gIH1cbiAgYXJ0aWNsZSB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXgtd2lkdGg6MTc1MHB4O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB9XG4gIHVsIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgdG9wOjBweDtcbiAgICB6LWluZGV4OjEwO1xuICAgIHBhZGRpbmctYm90dG9tOjE0cHg7XG4gIH1cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBmbGV4OjE7XG4gIH1cbiAgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjREREO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgIGJvcmRlci1yaWdodDowO1xuICAgIGJvcmRlci10b3A6MDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6I0ZGRjtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGhlaWdodDo2MHB4O1xuICAgIGNvbG9yOiM5OTlcbiAgfVxuICBsaS5hY3RpdmUgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiNGNUY1RjU7XG4gICAgY29sb3I6IzAwMDtcbiAgfVxuICB0YWJsZSB7IGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgdGFibGUtbGF5b3V0OmZpeGVkOyB3aWR0aDoxMDAlOyB9XG4gIHRoIHsgYmFja2dyb3VuZDojRjVGNUY1OyBkaXNwbGF5Om5vbmU7IH1cbiAgdGQsIHRoIHtcbiAgICBoZWlnaHQ6NTNweFxuICB9XG4gIHRkLHRoIHsgYm9yZGVyOjFweCBzb2xpZCAjREREOyBwYWRkaW5nOjEwcHg7IGVtcHR5LWNlbGxzOnNob3c7IH1cbiAgdGQsdGgge1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICB0ZCt0ZCwgdGgrdGgge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICB0ZC5kZWZhdWx0IHtcbiAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIH1cbiAgLmJnLXB1cnBsZSB7XG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgcmdiKDEzOCwgNDMsIDIyNik7XG4gIH1cbiAgLmJnLWJyb256ZSB7XG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgI2IwOGQ1NztcbiAgfVxuICBcbiAgLmJnLXNpbHZlciB7XG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgIzgwODA4MDtcbiAgfVxuICAuYmctZ29sZCB7XG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgZ29sZGVucm9kO1xuICB9XG4gIFxuICAuc2VwIHtcbiAgICBiYWNrZ3JvdW5kOiNGNUY1RjU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgfVxuICAudHh0LWwgeyBmb250LXNpemU6MjhweDsgZm9udC13ZWlnaHQ6Ym9sZDsgfVxuICAudHh0LXRvcCB7IHBvc2l0aW9uOnJlbGF0aXZlOyB0b3A6LTlweDsgbGVmdDotMnB4OyB9XG4gIC50aWNrIHsgZm9udC1zaXplOjE4cHg7IGNvbG9yOiMyQ0EwMUM7IH1cbiAgLmhpZGUge1xuICAgIGJvcmRlcjowO1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgdWwge1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICB0ZCx0aCB7XG4gICAgICBkaXNwbGF5OnRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgdGQsdGgge1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIFxuICAgIH1cbiAgICB0ZCt0ZCwgdGgrdGgge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/sponsors/sponsors.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.ts ***!
  \************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SponsorsComponent = class SponsorsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SponsorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sponsors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sponsors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sponsors.component.css */ "./src/app/sponsors/sponsors.component.css")).default]
    })
], SponsorsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tristanjin/Documents/GitHub/New-Wecca/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map