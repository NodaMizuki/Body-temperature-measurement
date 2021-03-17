import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';


@Component({
  selector: 'app-body-color',
  templateUrl: './body-color.component.html',
  styleUrls: ['./body-color.component.css']
})
export class BodyColorComponent implements OnInit {

  constructor(
    private temperatureService: TemperatureService
  ) { }
    
  
  ngOnInit() {
      this.temperatureService.data$.subscribe(({date, temperature}) => {
      console.log('今日の日付は' + date + 'です。');

      this.colorCheck(temperature);
    
    });

   }
    
  public colorCheck (temperature) {

    if(temperature <= 37.0){
      document.getElementById("default").style.opacity = "0";
      document.getElementById("color1").style.opacity = "0";
      document.getElementById("color2").style.opacity = "1";
    } else {
      document.getElementById("default").style.opacity = "0";
      document.getElementById("color1").style.opacity = "1";
      document.getElementById("color2").style.opacity = "0";
    }

  }


    }


