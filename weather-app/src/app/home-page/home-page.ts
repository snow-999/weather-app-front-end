import { Component } from '@angular/core';
import { WeatherStatusService } from '../services/weather-status-service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  weatherStatus: any = [];

  constructor(private weatherStatusService: WeatherStatusService) { }


  ngOnInit() {
    this.getWeatherStatus()
  }

  getWeatherStatus() {
    this.weatherStatusService.getWeatherStatus().subscribe(data => {
      console.log(data);

      this.weatherStatus = data;
    })
  }

}
