import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){

  }
  
  zipCode: string = "94111";
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.zipCode);
    this.zipCode = '';
  }

  onSubmit(){
    this.getWeatherData(this.zipCode);
    this.zipCode = '';

  }
  private getWeatherData(zipCode:string){
    this.weatherService.getWeatherData('9411')
    .subscribe({
      next: (response) =>{
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}

