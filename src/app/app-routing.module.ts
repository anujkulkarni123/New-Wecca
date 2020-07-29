import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExecpageComponent } from './execpage/execpage.component';
import { SponsorsComponent } from './sponsors/sponsors.component';



const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"calendar", component: CalendarComponent},
  {path:"executives", component: ExecpageComponent},
  {path:"sponsorship", component: SponsorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
