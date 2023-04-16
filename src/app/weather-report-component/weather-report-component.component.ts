import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service.service';
import { ActivatedRoute } from '@angular/router';

import { concatMap, filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-weather-report-component',
  templateUrl: './weather-report-component.component.html',
  styleUrls: ['./weather-report-component.component.scss']
})
export class WeatherReportComponent implements OnInit {
  data$!: Observable<any>;
  today: any
  date: any
  loading: boolean = true;
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //create an RXJS pipe to transform locationName Param, filter by name,
    // and append weatherService with concatMap
    this.data$ = this.route.params.pipe(
      map((params:any ) => params['locationName']),
      filter((name: any) => !!name),
      tap(()=> {
        this.loading = true;
      }),
      concatMap((name: any) => this.weatherService.getWeatherForCity(name)),
      tap(()=> {
        this.loading = false
      })

    )
  }

}
