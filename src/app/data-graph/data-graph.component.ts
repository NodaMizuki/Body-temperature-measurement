import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts'

@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.css']
})
export class DataGraphComponent  {

  //data
    lineChartData: ChartDataSets[] = [
      {
        data:[36.2,36.8,36.3,36.5,37,36.0],
        label:'毎日の体温'

      },

    ];

  //label
    lineChartLabels: Label[] = [
    
        '12/1',
        '12/2',
        '12/3',
        '12/4',
        '12/5',
        '12/6',

   ];

   lineChartOptions = {
    responsive: true,
  };

  //color
    lineChartColors: Color[] = [

    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,255,0.28)',
    },

  ];

    lineChartLegend = true; // グラフの属性ラベル
    lineChartPlugins = [];
    lineChartType = 'line'; // グラフの種類

    constructor() { } 

  }

