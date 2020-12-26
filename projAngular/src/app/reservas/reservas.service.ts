import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const APIBackEnd = 'http://localhost:3000';
const rotaLOGIN = APIBackEnd + '/reservas/busca';

//colocar o service GLOBAL para o componente usar
@Injectable({providedIn: 'root'})

export class ReservasService {
  dados: object [] = [];
  constructor(private http: HttpClient){}

  //metodo que receberá o resultado da comunicação com o backend
  listaDeDados(){
    //retornando o objeto para a rota APIBackEnd
    return this.http.get<object[]>(APIBackEnd);

  }

  //método que fará o acesso à rota de validação do acesso (login e senha) via NODEJS
  buscaReservas(dataRes: string, idLab: string){

    console.log("DATA ="+ dataRes);
    console.log("IDLAB =" + idLab);

    let envio = this.http.post(rotaLOGIN,{dataRes,idLab})
    console.log(envio);
    return envio;


  }
}

