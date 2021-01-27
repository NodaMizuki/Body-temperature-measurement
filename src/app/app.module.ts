import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TemperatureDataComponent } from './temperature-data/temperature-data.component';
import { BodyColorComponent } from './body-color/body-color.component';
import { FormsModule } from '@angular/forms';
import { DataGraphComponent } from './data-graph/data-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperatureDataComponent,
    BodyColorComponent,
    DataGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
