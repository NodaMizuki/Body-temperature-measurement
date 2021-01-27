import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-color',
  templateUrl: './body-color.component.html',
  styleUrls: ['./body-color.component.css']
})
export class BodyColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let color = document.getElementById('color');
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    open.addEventListener('click', function(){
      color.classList.add('changeColor');

    });
    close.addEventListener('click', function(){
      color.classList.remove('changeColor');

    });

    
      
    }
    

    }


