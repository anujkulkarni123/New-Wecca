import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExecpageComponent } from './execpage/execpage.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
const routes = [
    { path: "", component: HomepageComponent },
    { path: "calendar", component: CalendarComponent },
    { path: "executives", component: ExecpageComponent },
    { path: "sponsorship", component: SponsorsComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map