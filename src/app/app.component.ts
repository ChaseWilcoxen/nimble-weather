import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  countries = [
    {
      name: "United Kingdom",
      cities: ["London", "Warwick", "Birmingham"]
    },
    {
      name: "United States",
      cities: ["New York", "Chicago", "Washington"]
    },
    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"]
    },
    {
      name: "Pakistan",
      cities: ["Lahore", "Karachi", "Islamabad"]
    }
  ];  cities$! : Observable<any>
  countryControl!: FormControl;
  cityControl!: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);
      });

    this.countryControl = new FormControl("")
    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    )
  }

  ngOnDestroy() {
  }
}
