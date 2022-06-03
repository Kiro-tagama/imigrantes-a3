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

  
  sp=[
    {
      img:this.img+"daus.png",
      title:"Adus",
      desc:"O Adus oferece cursos de portugês, capacitação e geração de renda e presta orientação jurídica.O atendimento da orientação jurídica é prestado pessoalmente e via e-mail e as situações que necessitem de litígios administrativos ou judiciais são encaminhadas para órgão públicos e instituições privadas adequadas para a proteção do direito eventualmente violado.                                  Para realizar o agendamento da aulas em São Paulo ou marcar atendimento online (outras cidades), acesse o link:",
      linkTo:"https://adus.org.br/fale-conosco/"
    },
    {
      img:this.img+"daus.png",
      title:"Adus",
      endereco:"Endereço: R. da Glória, 900 – Liberdade"
    }
  ]

  br=[
    {
      img:this.img+"daus.png",
      title:"Adus",
      desc:"O Adus oferece cursos de portugês, capacitação e geração de renda e presta orientação jurídica.O atendimento da orientação jurídica é prestado pessoalmente e via e-mail e as situações que necessitem de litígios administrativos ou judiciais são encaminhadas para órgão públicos e instituições privadas adequadas para a proteção do direito eventualmente violado.                                  Para realizar o agendamento da aulas em São Paulo ou marcar atendimento online (outras cidades), acesse o link:",
      linkTo:"https://adus.org.br/fale-conosco/"
    },
    {
      img:this.img+"daus.png",
      title:"Adus",
      endereco:"Endereço: R. da Glória, 900 – Liberdade"
    }
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

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
