import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor( public http:HttpClient) { }

  getWeatherApi(city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q= '+ city + '&appid=2c03d84de41be71771bcf44b26a17fcd')
  }
}
