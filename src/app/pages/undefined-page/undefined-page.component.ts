import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-undefined-page',
  templateUrl: './undefined-page.component.html',
  styleUrls: ['./undefined-page.component.css','../../app.component.css']
})
export class UndefinedPageComponent implements OnInit {

  operadoras=[
    {img:'https://planosvivointernet.com.br/OPENGRAPH-VIVO.png',nome:'Vivo',link:'https://www.vivo.com.br/para-voce'},
    {img:'https://tm.ibxk.com.br/2016/04/15/15192824515676.jpg?ims=1120x420',nome:'Tim',link:'https://www.tim.com.br/rj'},
    {img:'https://t2.tudocdn.net/356693?w=646&h=284',nome:'Claro',link:'https://www.claro.com.br/'},
    {img:'https://br.mobiletransaction.org/wp-content/uploads/2015/12/oi-carteira-digital.jpg',nome:'Oi',link:'https://www.oi.com.br/'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
