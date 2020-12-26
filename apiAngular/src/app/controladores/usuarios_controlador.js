const { check, validationResult } = require('express-validator');
const UsuarioDAO = require('../BD/usuarios_dao');

var db = require('../../config/database');

class UsuariosControlador {

    geraJSonUsuarios() {
        return function (req, res) {
            const usuarioDAO = new UsuarioDAO(db);
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

    validaAcessoUsuario() {
        return function(req,res)  {
            // Pegando os dados que vieram do Angular via HTTP
            const login = req.body.login;
            const senha = req.body.senha;
            const usuariosDAO = new UsuarioDAO(db);
            // validação se o usuario existe no NODE
            usuariosDAO.consultaAcessoLogin(login,senha)
            .then(dados => {
                if (dados == 1)   // RETORNOU DADOS DO ACESSO - ACESSO OK
                {  console.log('USUARIO AUTENTICADO!'); }
                else { console.log('USUARIO NÃO AUTENTICADO!'); }
                res.json(dados);
            })
            .catch(erro => console.log(erro));
        }
    }
} // end da classe


module.exports = UsuariosControlador;
