import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.scss']
})
export class WeatherComponentComponent implements OnInit{

 public form!:NgForm
 public cityName:string=''
 public temperature!:number;
 public minTemperature!:number
 public maxTemperature!:number
 public humidity!:number;
 public wind!:number;

 constructor( public weatherService:WeatherService){}

  ngOnInit(): void {

  }

  onSubmit(){
    console.log("hello");
     console.log(this.cityName);
     this.weatherService.getWeatherApi(this.cityName).subscribe({

      next:(response:any)=>{
       console.log(response);
       this.temperature= response.main.temp -273;
       this.maxTemperature =response.main.temp_max-273;
       this.minTemperature = response.main.temp_min-273;
       this.humidity =response.main.humidity;
       this.wind=response.wind.speed;
      }

 })

  }
}
