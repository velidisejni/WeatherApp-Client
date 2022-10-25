import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTemperatureHalf, faWind, faTint } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { IDailyForcast } from '../Interface/Idailyforecast';
import { IForcast } from '../Interface/Iforecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  faWind = faWind;
  faTint = faTint;
  faTemperatureHalf = faTemperatureHalf;

  unit: string = 'metric';
  forecast!: IForcast;
  days!: IDailyForcast[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  getWeather(cityName: string, unit: string){
    console.log(cityName);

    this.http.get(`${environment.SERVER_LINK}/api/Weather?city=${cityName}&units=${unit}`).subscribe((res: any) => {
      let resForecast = JSON.parse(res);
      console.log(resForecast);

      if(resForecast.message === 0){
        this.forecast = resForecast;
        this.days = [this.forecast.list[3], this.forecast.list[11], this.forecast.list[23], this.forecast.list[31]];
      }
      // this.users = res;
    })
  }

  getDate(dt: any){
    return new Date(dt);
  }

  onLogout(){
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.router.navigate(['auth']);
  }

}
