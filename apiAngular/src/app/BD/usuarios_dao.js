class UsuariosDAO {

    constructor(db) {
        this._db = db;
    }

    consultaAcessoLogin(login, senha)  {
        return new Promise((resolve, reject) => 
        {
            var slqConsulta = "SELECT * FROM USUARIOS WHERE emailUsr ='" + login + "' AND senhaUsr='" +  senha + "'";
            console.log(slqConsulta);
            this._db.query(slqConsulta,function (erro, resultado) {
                if (erro) {
                  console.log(erro);
                  return reject('USUARIO NÃO AUTENTICADO - ACESSO NEGADO!');
                }
                else  // significa que promisse está OK
                {
                    if (resultado.length > 0) 
                    {  var dados = resultado.length;  }
                    else  { var dados = 0; }
                    resolve(dados);
                }
            });
        });
    }
}  

module.exports = UsuariosDAO;