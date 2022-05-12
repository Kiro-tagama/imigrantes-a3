import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../app.component.css']
})

export class HomeComponent implements OnInit {
  //title
  Documentos:string='Documentos'
  Moradia:string='Moradia'
  Educacao:string='Educação'
  Saude:string='Saúde'
  Emprego:string='Emprego'
  Undf:string='Chip'
  Cadastro:string='Cadastro'

  //icons
  iconDoc:string='ph-identification-badge'
  iconHabit:string='ph-house'
  iconEduc:string='ph-books'
  iconHealth:string='ph-first-aid'
  iconJob:string='ph-briefcase'
  iconUndf:string='ph-sim-card'
  iconForm:string='ph-clipboard'
            

  constructor() { }

  ngOnInit(): void {
  }

}
