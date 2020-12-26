import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ObjectUnsubscribedError } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AcessoService } from './acesso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  objdados: object[] = [];
  loginForm: FormGroup;

  constructor(private acessoService:AcessoService, private formBuilder: FormBuilder, private redirect: Router) {
    acessoService.listaDeDados().subscribe(dados  => {
     console.log(dados);
     this.objdados = dados;
    });

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //criar os campos para associar no form
      login: ['', Validators.required],
      senha: ['', [Validators.minLength(3), Validators.required] ]

    });
  }

  acesso (){
    const login = this.loginForm.get('login').value;
    const senha = this.loginForm.get('senha').value;

    this.acessoService
    .autenticacaoAcesso(login,senha)
    .subscribe(dados => {
      //retorno do node.js
      console.log("Exibindo dados do formulário Angular" + dados);
      //validação do retorno que veio do nodejs
      if (dados == 1) {
        console.log('USUÁRIO AUTENTICADO');
        alert('Usuário autenticado');
        this.redirect.navigate(['/reservas']);
        localStorage.setItem('taLogado', "true");
      } else {
        console.log("USUÁRIO NÃO AUTENTICADO");
        alert("Usuário NÃO autenticado... sem acesso!");
        localStorage.setItem('taLogado', "false");
      }
    })

  }

}
