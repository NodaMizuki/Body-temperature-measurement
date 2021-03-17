import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-temperature-data',
  templateUrl: './temperature-data.component.html',
  styleUrls: ['./temperature-data.component.css']
})
export class TemperatureDataComponent implements OnInit {
  date = new FormControl ('2020-12-01',[
    Validators.required
  ]);
  temperature= new FormControl (36.5,[
    Validators.required
  ]);

  constructor(
    //サービスの生成
    private temperatureService: TemperatureService,
    private builder: FormBuilder
    ) { }

    myForm = this.builder.group({
      date: this.date,
      temperature: this.temperature
    });

  ngOnInit() {
    
  }
  
  
  clickNext() {
    this.temperatureService.func(this.date.value,this.temperature.value);
    this.temperatureService.temperatures.push({day:this.date.value, temp:this.temperature.value});
    console.log(this.temperatureService.temperatures);
    console.log(this.temperatureService.temperatures);
  }
  
}
