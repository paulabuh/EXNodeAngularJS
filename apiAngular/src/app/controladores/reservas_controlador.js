const { check, validationResult } = require('express-validator');
const ReservaDAO = require('../BD/reservas_dao');

var db = require('../../config/database');

class ReservasControlador {

    /*
    geraJSonReservas() {
        return function (req, res) {
            const resDAO = new ReservaDAO(db);
            db.query('SELECT * FROM USUARIOS', function (error, dados, fields) 
            {
                if (error)
                    console.log('Geração do JSON - Erro na consulta da tabela USUARIOS');
                else {
                    res.json(dados);
                    console.log(dados);
                    console.log('JSON GERADO!');
                }
            });
        }
    }
    */

    buscaReservas() {
        return function(req,res)  {
            // Pegando os dados que vieram do Angular via HTTP
            const dataRes = req.body.dataRes;
            const idLab = req.body.idLab;
            const resDAO = new ReservaDAO(db);
            // validação se o usuario existe no NODE
            resDAO.buscaReservasPorDataELaboratorio(dataRes,idLab)
            .then(dados => {
                res.json(dados);
            })
            .catch(erro => console.log(erro));
        }
    }
} // end da classe


module.exports = ReservasControlador;
