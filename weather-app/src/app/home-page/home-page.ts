import { Component } from '@angular/core';
import { WeatherStatusService } from '../services/weather-status-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  weatherStatus: any = [];

  searchBar: FormGroup

  constructor(private weatherStatusService: WeatherStatusService, private fb: FormBuilder) {
    this.searchBar = this.fb.group({
      search: ['']
    })
  }


  ngOnInit() {
    this.getWeatherStatus()
  }

  getWeatherStatus() {
    this.weatherStatusService.getWeatherStatus().subscribe(data => {

      this.weatherStatus = data;
    })
  }

  getWeatherStatusByCityName() {
    this.weatherStatusService.getWeatherByCity(this.searchBar.value).subscribe({
      next(value) {
        console.log(value);

      },
    })
  }

}
