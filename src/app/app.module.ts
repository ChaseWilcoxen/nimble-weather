import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { WeatherReportComponent } from './weather-report-component/weather-report-component.component'; 
import { WeatherService } from './weather-service.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
