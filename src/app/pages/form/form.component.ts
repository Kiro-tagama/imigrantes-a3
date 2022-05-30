import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css','../../app.component.css']
})
export class FormComponent implements OnInit {

  onAdicionarCliente(form:NgForm) {
    if (form.invalid) {
      return
    }

    this.clienteService.adicionarCliente(
      form.value.nome,
      form.value.email,
      form.value.tel,
      form.value.nacionalidade,
      form.value.desc,
    )
    form.resetForm()

    
    // const cliente:Cliente={
    //   nome:form.value.nome,
    //   fone:form.value.fone,
    //   email:form.value.email,
    // }
    // this.clienteAdicionado.emit(cliente)

    //extra q eu coloquei para limpar o campo apos enviar
    // this.nome=''
    // this.fone=''
    // this.email=''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
