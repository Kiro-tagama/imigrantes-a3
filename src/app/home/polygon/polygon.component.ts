import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.css']
})
export class PolygonComponent implements OnInit {
  @Input() title:string|undefined
  @Input() outerText:string|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
