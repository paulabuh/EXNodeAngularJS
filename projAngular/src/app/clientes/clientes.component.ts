import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  result: any;
  caminhoJson = '/assets/clientes.json';

  //construtor é chamado antes e depois a inicialização
  constructor(private http: HttpClient, private redirect: Router) {


   }

  //Na inicialização do componente, este método é chamado.
  ngOnInit(): void {

    if (localStorage.getItem('taLogado')=="true")
    {
      this.http.get<any>(this.caminhoJson).subscribe(response => {
      this.result = response;

      });//end do response
    } else {
      alert ('Sem acesso!');
      this.redirect.navigate(['/']);
    }

  } //end do ngOnInit()

}
