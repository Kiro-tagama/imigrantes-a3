import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css','../../app.component.css']
})
export class HealthComponent implements OnInit {
  numeros=[
    {nome:'Polícia Militar',numero:'190'},
    {nome:'Bombeiros ',numero:'193'},
    {nome:'Polícia Civil ',numero:'197'},
    {nome:'Disque denúncia ',numero:'118 ',desc:'(O Disque-Denúncia é um serviço de combate ao crime, operacional em alguns estados no Brasil.)'},
    {nome:'Guarda Municipal ',numero:'153'},
    {nome:'Polícia Rodoviária Estadual ',numero:'198'},
    {nome:'Defesa Civil ',numero:'199 ',desc:'(A defesa civil ou proteção civil é o conjunto de ações preventivas, de socorro, assistenciais e reconstrutivas destinadas a evitar ou minimizar os desastres naturais e os incidentes tecnológicos)'},
    {nome:'Samu ',numero:'192 ',desc:'( é um serviço brasileiro de atendimento médico pré-hospitalar, acionado em casos de emergência.)'},
    
    {nome:'Detran ',numero:'154 ',desc:'( Departamento Estadual de Trânsito e dentre os principais serviços oferecidos por esse órgão estão: emissão e renovação de CNHs, licenciamento e transferência de veículos.)'},
    {nome:'Direitos Humanos ',numero:'100 ',desc:'( Direitos humanos trata  dos direitos básicos de todos os seres humanos. São direitos civis e políticos; direitos econômicos, sociais e culturais; direitos difusos e coletivos.)'},
    {nome:'Centro de valorização da vida ',numero:'141 ',desc:'(realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, email e chat 24 horas todos os dias.)'},
    {nome:'Prevenção às drogas ',numero:'132'},
    {nome:'Conselho Tutelar ',numero:'125 ',desc:'(encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente.)'},
    {nome:'Delegacia da mulher ',numero:'180 ',desc:'(Central de Atendimento à Mulher (gratuito e com atendimento 24 horas que auxilia e orienta as mulheres vítimas de violência)'},
    {nome:'Disque ouvidoria ',numero:'162 ',desc:'(intermedia as relações entre os cidadãos que as demandam e os órgãos ou entidades aos quais pertencem, promovendo a qualidade da comunicação entre eles)'},
    {nome:'Disque prefeitura ',numero:'156'},
    {nome:'Tribunal de justiça ',numero:'159'},
    
    {nome:'SUS ',numero:'136 ',desc:'(ouvidoria do sistema público de saúde) '},
    {nome:'Secretaria de saúde ',numero:'160'},
    {nome:'Vigilância sanitária ',numero:'150'},
    {nome:'Previdência ',numero:'135'},
    {nome:'Receita Federal ',numero:'146'},
    {nome:'Defensoria pública ',numero:'162'},
    {nome:'Ministério Público ',numero:'129'},
    {nome:'Disque eleitor ',numero:'148'},
    {nome:'Delegacia do trabalho ',numero:'158'},
    
    {nome:'Procon ',numero:'151 '},
    {nome:'Água e esgoto ',numero:'115'},
    {nome:'Energia Elétrica ',numero:'116'},
    {nome:'Gás encanado ',numero:'117'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
