import { Component } from '@angular/core';
import { WeatherStatusService } from '../services/weather-status-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  weatherStatus: any = [];
  searchBarData: any;
  searchToggel: boolean = false
  searchBar: FormGroup

  constructor(private weatherStatusService: WeatherStatusService, private fb: FormBuilder, private userService: UserService) {
    this.searchBar = this.fb.group({
      search: ['']
    })
  }


  ngOnInit() {
    this.userService.hasRole("admin")
    this.searchToggel = false
    this.getWeatherStatus()
  }

  getWeatherStatus() {
    this.weatherStatusService.getWeatherStatus().subscribe(data => {

      this.weatherStatus = data;
    })
  }

  getWeatherStatusByCityName() {
    const cityName: string = this.searchBar.get('search')?.value || '';
    console.log(cityName);

    this.weatherStatusService.getWeatherByCity(cityName).subscribe(data => {
      this.searchBarData = data
      console.log(this.searchBarData);
      this.searchToggel = true
    })

  }

}
