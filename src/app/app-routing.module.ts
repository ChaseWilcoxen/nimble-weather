import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherReportComponent } from './weather-report-component/weather-report-component.component';

const routes: Routes = [
  {
    path: "",
    component: WeatherReportComponent
  },
  {
    path: ":locationName",
    component: WeatherReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
