import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportComponentComponent } from './weather-report-component.component';

describe('WeatherReportComponentComponent', () => {
  let component: WeatherReportComponentComponent;
  let fixture: ComponentFixture<WeatherReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
