import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ObjectUnsubscribedError } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservasService } from './reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  
  result: any;
  objDados: object [] = [];
  loginForm: FormGroup;

  constructor(private reservasService:ReservasService, private formBuilder: FormBuilder, private http: HttpClient, private redirect: Router) {
    reservasService.listaDeDados().subscribe(dados  => {
     console.log(dados);
     this.objDados = dados;
    });

  }

  //Na inicialização do componente, este método é chamado.
  ngOnInit(): void {

    if (localStorage.getItem('taLogado')=="true")
    {
      
      const dataRes = "2019-12-05";//this.loginForm.get('login').value;
      const idLab = "1"; //this.loginForm.get('senha').value;
  
      this.reservasService
      .buscaReservas(dataRes,idLab)
      .subscribe(dados => {
        //retorno do node.js
        console.log("Exibindo dados do formulário Angular" + dados);
        //validação do retorno que veio do nodejs
        if (dados != null) {
            this.result = dados;
        } else {
          console.log("XXXXXXXXXXXXX");
        }
      });     
    } else {
      alert ('Sem acesso!');
      this.redirect.navigate(['/']);
    }

  } //end do ngOnInit()

}
