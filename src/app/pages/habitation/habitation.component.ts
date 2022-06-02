import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.css','../../app.component.css']
})
export class HabitationComponent implements OnInit {
  sp=[
    // Centro de Referência Especializado de Assistência Social (CREAS) – Bela Vista
    // Endereço: Rua Santo Antonio, 800
    // Telefones: (11) 3129-9216 / 3129-9235
    
    // Centro de Referência e Atendimento para Imigrantes (CRAI)
    // Email: recepcao.crai@sefras.org.br
    // Endereço: Rua Major Diogo, 834, Bela Vista
    // Telefone: +55 11 3598-7200 / +55 (11) 2361-3780 / +55 (11) 2361-5069
    // Website: http://www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/migrantes/crai/
    
    // Caritas Arquidiocesana de São Paulo
    // Email: caritassp@caritassp.org.br
    // Endereço: Rua José Bonifácio, 107 – Sé
    // Telefone: +55 11 4873-6363
    // Website: http://www.caritassp.org.br
    
    // Missão Paz
    // Email: contato@missaonspaz.org
    // Endereço: Rua Glicério, 225 – Liberdade
    // Telefone: +55 11 3340-6950
    // Website: https://missaonspaz.org/sand/casa-do-migrante/ 

  ]

  estados=[
    // MANAUS
    // PITRIG – Posto de Interiorização e Triagem
    // Av. Torquato Tapajós, 1047 – Da Paz
    // Buscar a sala da assistência social para fazer solicitação de vaga em abrigo.
    // Caritas Arquidiocesana de Manaus
    // Email: caritasarquimanaus@gmail.com
    // Telefone: +55 92 3212-9030/ 3234-2567
    // Website:https://arquidiocesedemanaus.org.br/caritas/
    // BRASÍLIA
    // UNISUAS
    // Endereço: Av. L 2 Sul, Quadra 614/615, Lote 104 (atrás do CREAS)
    // Telefone: +55 61 3223-2656 e 3224-0257
    // CURITIBA
    // Caritas Brasileira Regional do Paraná
    // E-mail: caritaspr@caritas.org.br
    // Telefone: +55 41 3023-9907
    // Website: http://pr.caritas.org.br/
    // RIO DE JANEIRO
    // Caritas Arquidiocesana do Rio de Janeiro
    // Email: carj.refugiados@caritas-rj.org.br
    // Telefone: +55 21 2567-4105 /2567-4177 / (21) 99794-5436
    // Website: http://www.caritas-rj.org.br/
    // BOA VISTA
    // Posto de Interiorização e Triagem (PITRIG)
    // Endereço: Treze de Setembro, Boa Vista – RR, 69308-050

  ]

  aluguel=[
    {img:'',nome:'Quinto andar',desc:'A companhia administra o pagamento de aluguel ao proprietário, dispensando inquilino de apresentar fiador, seguro-fiança ou depósito caução.',link:'https://www.quintoandar.com.br/'},
    {img:'',nome:'Zap Imóveis',desc:'Reúne ofertas qualificadas, além de fotos, dicas e mapas para quem quer alugar, comprar ou vender. ',link:'https://www.zapimoveis.com.br/'},
    {img:'',nome:'VivaReal',desc:'O portal Viva Real, conta com mais de 5 milhões de imóveis.',link:'https://www.vivareal.com.br/'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
