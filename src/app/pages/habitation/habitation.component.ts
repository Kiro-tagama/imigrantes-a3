import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.css','../../app.component.css']
})
export class HabitationComponent implements OnInit {
  sp=[
    {
      nome:'Centro de Referência Especializado de Assistência Social (CREAS) – Bela Vista',
      endereco: 'Rua Santo Antonio, 800',
      tel: '(11) 3129-9216 / 3129-9235',
      site: null,email:null
    },
    {
      nome:'Centro de Referência e Atendimento para Imigrantes (CRAI)',
      email: 'recepcao.crai@sefras.org.br',
      endereco: 'Rua Major Diogo, 834, Bela Vista',
      tel: '+55 11 3598-7200 / +55 (11) 2361-3780 / +55 (11) 2361-5069',
      site: 'http://www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/migrantes/crai/',
    },
    {
      nome:'Caritas Arquidiocesana de São Paulo',
      email: 'caritassp@caritassp.org.br',
      endereco: 'Rua José Bonifácio, 107 – Sé',
      tel: '+55 11 4873-6363',
      site: 'http://www.caritassp.org.br',
    },
    {
      nome:'Missão Paz',
      email: 'contato@missaonspaz.org',
      endereco: 'Rua Glicério, 225 – Liberdade',
      tel: '+55 11 3340-6950',
      site: 'https://missaonspaz.org/sand/casa-do-migrante/',
    }
  ]

  estados=[
    {
      estado:'MANAUS',
      nome:'PITRIG – Posto de Interiorização e Triagem',
      endereco:'Av. Torquato Tapajós, 1047 – Da Paz',
      desc1:'Buscar a sala da assistência social para fazer solicitação de vaga em abrigo.',
      desc2:'Caritas Arquidiocesana de Manaus',
      email: 'caritasarquimanaus@gmail.com',
      tel: '+55 92 3212-9030/ 3234-2567',
      site:'https://arquidiocesedemanaus.org.br/caritas/'
    },
    {
      estado:'BRASÍLIA',
      nome:'UNISUAS',
      endereco:'Av. L 2 Sul, Quadra 614/615, Lote 104 (atrás do CREAS)',
      tel: '+55 61 3223-2656 e 3224-0257',
    },
    {
      estado:'CURITIBA',
      nome:'Caritas Brasileira Regional do Paraná',
      email: 'caritaspr@caritas.org.br',
      tel: '+55 41 3023-9907',
      site:' http://pr.caritas.org.br/'
    },
    {
      estado:'RIO DE JANEIRO',
      nome:'Caritas Arquidiocesana do Rio de Janeiro',
      email: 'carj.refugiados@caritas-rj.org.br',
      tel: '+55 21 2567-4105 /2567-4177 / (21) 99794-5436',
      site:' http://www.caritas-rj.org.br/'
    },
    {
      estado:'BOA VISTA',
      nome:'Posto de Interiorização e Triagem (PITRIG)',
      endereco:'Treze de Setembro, Boa Vista – RR, 69308-050'
    },
    {
      estado:'PACARAIMA',
      nome:'Posto de Interiorização e Triagem (PITRIG)',
      endereco:'BR174, s/n. Pacaraima'

    }

  ]

  aluguel=[
    {img:'../../../assets/img/5andar.png',nome:'Quinto andar',desc:'A companhia administra o pagamento de aluguel ao proprietário, dispensando inquilino de apresentar fiador, seguro-fiança ou depósito caução.',link:'https://www.quintoandar.com.br/'},
    {img:'../../../assets/img/zap.png',nome:'Zap Imóveis',desc:'Reúne ofertas qualificadas, além de fotos, dicas e mapas para quem quer alugar, comprar ou vender. ',link:'https://www.zapimoveis.com.br/'},
    {img:'../../../assets/img',nome:'VivaReal',desc:'O portal Viva Real, conta com mais de 5 milhões de imóveis.',link:'https://www.vivareal.com.br/'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
