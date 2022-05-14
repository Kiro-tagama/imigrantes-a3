import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css','../../app.component.css'],

  animations:[
    trigger('openClose',[
      state('open',style({
        transform:'rotate(180deg)'
      })),

      state('close',style({
        transform:'rotate(0deg)'
      })),

      transition('open => close',[
        animate('1s')
      ]),

      transition('close => open',[
        animate('1s')
      ])
    ])
  ]
})
export class DocumentationComponent implements OnInit {
  listOpen = false;

  toggleList(x:any){
    this.listOpen = !this.listOpen
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
