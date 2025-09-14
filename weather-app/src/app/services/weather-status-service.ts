import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherStatusService {
  constructor(private http: HttpClient) { }


  getWeatherStatus() {
    return this.http.get("http://localhost:8081/api/v1/getweather")
  }
}
