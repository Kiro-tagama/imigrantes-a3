import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css','../../app.component.css']
})
export class EducationComponent implements OnInit {
  img='../../../assets/img/imgEduc/'

  cursosOnline=[
    { 
      img:"",
      title:"Fluency",
      desc:"A Fluency Academy, em parceria com o ACNUR, está ofertando cursos de português online para falantes de espanhol. Para mais informações, acesse o site:",
      linkTo:"https://www.fluencytv.com/cursodeportugues"
    },
    { 
      img:this.img+"adus.png",
      title:"Adus",
      desc:"O Adus oferece cursos gratuitos de português no Youtube: ",
      linkTo:"https://www.youtube.com/playlist?list=PL-BWXjFiBucMrxY38olzYNzx-OCMNcU33"
    },
    { 
      img:this.img+"bradesco.png",
      title:"Fundação Bradesco",
      desc:"Língua Portuguesa sem Complicações. Este curso foi desenvolvido especialmente para você estudar os aspectos da língua portuguesa que mais causam dúvidas",
      linkTo:"https://www.ev.org.br/cursos/lingua-portuguesa-sem-complicacoes"
    },
    { 
      img:this.img+"bradesco.png",
      title:"Fundação Bradesco",
      desc:"Oficina de Língua Portuguesa: Neste curso introdutório de gramática da língua portuguesa, você estudará a sintaxe desse idioma",
      linkTo:"https://www.ev.org.br/cursos/oficina-de-lingua-portuguesa-gramatica"
    },
    
  ]

  cursosProfis=[
    { 
      img:this.img+"bradesco.png",
      title:"Fundação bradesco",
      desc:"A Fundação bradesco é uma escola Virtual é um portal de e-learning dedicado a oferecer cursos gratuitos e 100% online em diferentes áreas, tais como Administração, Contabilidade e Finanças, Tecnologia, Desenvolvimento Pessoal e Profissional e Educação.",
      linkTo:"https://www.ev.org.br"
    },
    { 
      img:this.img+"abracoCultural.png",
      title:"Abraço Cultural",
      desc:"Com operações no Rio de Janeiro e São Paulo, o Abraço Cultural emprega refugiados e migrantes para dar aula de idiomas e compartilhar sua cultura, promovendo uma rica troca de experiências, com a intenção de contribuir para a inserção dessas pessoas em nossa sociedade.",
      linkTo:"https://www.abracocultural.com.br"
    },
    { 
      img:this.img+"parr.png",
      title:"O Programa de Apoio para a Recolocação dos Refugiados – PARR",
      desc:"Com o intuito é promover a integração de refugiados e solicitantes de refúgio na sociedade brasileira por meio da inclusão laboral. A convicção de que não há melhor maneira para facilitar a adaptação dessas pessoas no país do que assegurar que eles atinjam a autossuficiência por meio de seu próprio trabalho é nossa premissa central. Para tanto, temos por objetivo sensibilizar a sociedade e, principalmente, o empresariado nacional para a assimilação da capacidade que refugiados e solicitantes de refúgio têm de contribuir para a economia do Brasil.",
      linkTo:"https://www.refugiadosnobrasil.org"
    },
    { 
      img:this.img+"cami.png",
      title:"CAMI",
      desc:"A entidade desenvolve ações de base em bairros da periferia de São Paulo e da Grande São Paulo, além da promoção de cursos de capacitação que trazem consigo informações sobre cidadania e direitos dos migrantes. O CAMI também atua em iniciativas como o Festival de Música e Poesia do Imigrante e na Marcha dos Imigrantes – ambas acontecem anualmente em São Paulo.",
      linkTo:"https://www.cami.org.br "
    },
  ]
  //estdos com mais
  //sp,manaus,pa,bv,pacaraima
  sp=[
    {
      img:this.img+'auds.png',
      nome:'Adus',
      desc:'O Adus oferece cursos de portugês, capacitação e geração de renda e presta orientação jurídica.O atendimento da orientação jurídica é prestado pessoalmente e via e-mail e as situações que necessitem de litígios administrativos ou judiciais são encaminhadas para órgão públicos e instituições privadas adequadas para a proteção do direito eventualmente violado.',
      desc2:'Para realizar o agendamento da aulas em São Paulo ou marcar atendimento online (outras cidades), acesse o link:',
      site:'https://adus.org.br/fale-conosco/'
    },
    {
      img:this.img+'compassiva.png',
      nome:'Compassiva',
      Endereco: 'R. da Glória, 900 – Liberdade',
      tel: '(11)97512-0307 ou (11)93730-4461.',
      WhatsApp: '11975120307',
      site: 'https://compassiva.org.br/lar/ '
    },
    {
      img:this.img+'caritasSP.png',
      nome:'Caritas Arquidiocesana de São Paulo',
      desc:'Serviço de Acolhida e Orientação para Refugiados ',
      desc2:'De segunda a sexta-feira, das 08h30 às 17h30.',
      Endereco: 'Rua José Bonifácio, nº107, 1º andar – Centro',
      tel: '+55 11 97630-8023',
      WhatsApp: '11976308023',
      email: 'caritassp@caritassp.org.br',
    },
    {
      img:this.img+'visaoMundial.png',
      nome:'VISÃO MUNDIAL',
      tel: '(11) 99427-9660',
      WhatsApp: '11994279660',
      site: 'https://visaomundial.org.br/'
    },
    {
      img:this.img+'missaoPaz.png',
      nome:'MISSÃO PAZ',
      endereco: 'Rua Glicério, 225 – Liberdade, São Paulo',
      tel: '(11) 3340-6950',
      site: 'https://missaonspaz.org/sand/cursos-de-portugues/ '
    },
    {
      img:this.img+'bibliaspa.png',
      nome:'BibliASPA',
      Endereco: 'Rua Baronesa de Itu, 639, Santa Cecília, São Paulo (SP)',
      tel: '(11) 99609-3188'
    }

  ]

  manaus=[
    {
      img:this.img+'adra.png',
      nome:'CARE (Centro de Apoio e Referência a Refugiados e Migrantes)', 
      Endereco: 'Av. Maués, 120 – Cachoeirinha',
      email: 'nucleo.manaus@adra.org.br',
      tel: '(92) 3342-6531 (92) 99303-7757 (Whatsapp)',
      site: 'https://adra.org.br/projetos/care/ '
    },
    {
      img:this.img+'',
      nome:'Cáritas Arquiodicesana de Manaus ',
      Endereco: 'Rua Joaquim Nabuco, 1023 – Centro',
      email: 'caritasarquimanaus@gmail.com',
      tel: '(92) 99292-4472 / (92) 3212-9030',
      site:'https://arquidiocesedemanaus.org.br/laicato/caritas-arquidiocesana-de-manaus/ '
    } ,
    {
      img:this.img+'sjmr.png',
      nome:'SJMR (Serviço Jesuíta a Migrantes e Refugiados) ',
      Endereco: 'Av. Joaquim Nabuco, 1023 – Centro',
      email: 'comunicacao@sjmrbrasil.org',
      tel: '(92) 99157-6097',
      site: 'https://sjmrbrasil.org/contato/ '
    }
  ]

  portoAlegre=[
    {
      img:this.img+'',
      nome:'Cibai Migrações',
      desc:'No momento as aulas estão sendo online.',
      Endereco: 'Rua Dr Barros Cassal, 220 – Floresta',
      email: 'portuguescibai@gmail.com ou conexaoportugues@cibaimigracoes.org',
      WhatsApp: '51992223032',
      site:'https://cibaimigracoes.org/cursos-de-capacitacao/ '
    },
    {
      img:this.img+'sjmr.png',
      nome:'SJMR (Serviço Jesuíta a Migrantes e Refugiados)' ,
      Endereco: 'Rua General Caldwell, 651, no bairro Menino Deus – Porto Alegre (RS)',
      email: 'atendimentopoa@sjmrbrasil.org',
      tel: '+55 51 3254-0140',
      Whatsapp: '51999955573',
      site:  'https://sjmrbrasil.org/contato/ '
    }
  ]

  bv=[
    {
      img:this.img+'',
      nome:'AVSI',
      desc:'Para residentes dos abrigos da Operação Acolhida geridos pela AVSI, buscar equipes de Meios de Vida do seu abrigo.',
      site: 'https://www.avsibrasil.org.br/contato/ ',
    },

    {
      img:this.img+'visaoMundial.png',
      nome:'Visão Mundial',
      desc:'Informações sobre cursos na sede da ADRA ',
      Endereco: 'Rua Belarmino F Magalhães, 1584 – Tancredo Neves, Boa Vista – RR, 69313-485) ou no PTRIG Boa Vista (Avenida Brasil, bairro 13 de Setembro, Boa Vista, Roraima / CEP 69308-050 )',
    }

  ]

 pacaraima=[
    {
      img:this.img+'imdh.pnh',
      nome:'IMDH Solidário',
      desc:'encaminhamento para cursos de português ',
      Endereco: 'R. Uraricoera, 671 – Bairro São Vicente CEP 69303-453 – Boa Vista-RR.'
    },
    {
      img:this.img+'',
      nome:'CCR ',
      desc:'Centro de Capacitação e Referência de Pacaraima ',
      Endereco: 'Rua Um, número 289 – Centro, Pacaraima'
    }
  ]


  estado=[
    //br,curi,flori,rj
    {
      id:'BRASÍLIA',
      img:this.img+'',
      nome:'IMDH ',
      desc:'Oferece cursos de português e também é local de inscrição para outros cursos de línguas, contudo com a pandemia, o levantamento de cursos disponíveis está sendo feito constantemente, por isso, caso tenha interesse, contate o IMDH.',
      email: 'imdh@migrante.org.br',
      tel: '(61) 3340-2689 e 3447-8043',
      WhatsApp: '61982105085.',
      site:'https://www.migrante.org.br/' 
    },
    {
      id:'CURITIBA',
      img:this.img+'celin.png',
      nome:'Português para Estrangeiros – Celin',
      Endereco: 'Rua Dr. Faivre, n° 405, 4º andar – Ed. D. Pedro II.',
      tel: '+55 (41) 3360-5101 / 3360-5267',
      site:'https://celin.ufpr.br/informacoes-sobre-inscricoes-para-os-cursos-de-portugues-para-estrangeiros/'
    },
    {
      id:'FLORIANÓPOLIS ',
      img:this.img+'h.png',
      nome:'Círculos de hospitalidade',
      desc:'instagram: @circulosdehospitalidade',
      email: 'contato@circulosdehospitalidade.org',
      tel: '(48) 99638-0528',
      WhatsApp: '48996380528',
      site: 'https://circulosdehospitalidade.org/projetos/ '
    },
    {
      id:'RIO DE JANEIRO',
      img:this.img+'',
      nome:'Caritas Arquidiocesana do Rio de Janeiro',
      Endereco: 'Rua São Francisco Xavier, nº483 – Maracanã',
      tel: '(21) 97228-1178',
      WhatsApp: '21972281178',
      site:'http://www.caritas-rj.org.br/curso-de-portugues-para-refugiados.html '
    }
  ]

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
