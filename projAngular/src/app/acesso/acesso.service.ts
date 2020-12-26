import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const APIBackEnd = 'http://localhost:3000';
const rotaLOGIN = APIBackEnd + '/usuario/login';

//colocar o service GLOBAL para o componente usar
@Injectable({providedIn: 'root'})

export class AcessoService {
  dados: object [] = [];
  constructor(private http: HttpClient){}

  //metodo que receberá o resultado da comunicação com o backend
  listaDeDados(){
    //retornando o objeto para a rota APIBackEnd
    return this.http.get<object[]>(APIBackEnd);
  }

  //método que fará o acesso à rota de validação do acesso (login e senha) via NODEJS
  autenticacaoAcesso(login: string, senha: string){

    console.log("Login da Autenticação ="+ login);
    console.log("Senha da Autenticação =" + senha);

    let envio = this.http.post(rotaLOGIN,{login,senha})
    console.log(envio);
    return envio;


  }
}

