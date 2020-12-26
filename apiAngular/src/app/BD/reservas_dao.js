class ReservasDAO {

    constructor(db) {
        this._db = db;
    }

    buscaReservasPorDataELaboratorio(dataRes, idLab)  {
        return new Promise((resolve, reject) => 
        {
            var slqConsulta = "SELECT * FROM reservas WHERE dataRes ='" + dataRes + "' AND idLab=" +  idLab ;
            console.log(slqConsulta);
            this._db.query(slqConsulta,function (erro, resultado) {
                if (erro) {
                  console.log(erro);
                  return reject('Não há reservas!');
                }
                else  // significa que promisse está OK
                {
                    if (resultado.length > 0) 
                    {  var dados = resultado;  }
                    else  { var dados = null; }
                    resolve(dados);
                }
            });
        });
    }
}  

module.exports = ReservasDAO;