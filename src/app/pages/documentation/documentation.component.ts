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
  styleUrls: ['./documentation.component.css','../../app.component.css']
})
export class DocumentationComponent implements OnInit {
  
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
