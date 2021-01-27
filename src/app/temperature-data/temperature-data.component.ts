import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-data',
  templateUrl: './temperature-data.component.html',
  styleUrls: ['./temperature-data.component.css']
})
export class TemperatureDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let submit = document.getElementById('submit');
    let temperature = document.getElementById('temperature').value;
    submit.addEventListener('click', function(){
    console.log('あなたの体温は${temperature}です');
    window.alert('あなたの体温は' + temperature + 'です');
    });
  }

}
