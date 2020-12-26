const UsusariosControlador = require('../controladores/usuarios_controlador');
const ReservasControlador = require('../controladores/reservas_controlador');
const usuariosControlador = new UsusariosControlador();
const reservasControlador = new ReservasControlador();
module.exports = (app) => {

// Evitar problema com o CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});


/**************  ROTAS  **************/
//app.get('/', usuariosControlador.geraJSonUsuarios());

// rota usada para validar dados que vieram do ANGULAR
app.post('/usuario/login', usuariosControlador.validaAcessoUsuario());
app.post('/reservas/busca', reservasControlador.buscaReservas());

}
