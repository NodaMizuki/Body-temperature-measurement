import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Temperature } from './temperature';
import { TEMPERATURES } from './mock-temperature';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  //通知用の変数
  public data = new Subject(); 
  public data$ = this.data.asObservable();
  
   

public func(date, temperature) {
  //変更通知の発火
  this.data.next({date, temperature});
}


  temperatures: Temperature[] = new Array();

  constructor() { }



}
