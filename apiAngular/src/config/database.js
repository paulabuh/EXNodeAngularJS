const mysql = require('mysql');

const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'turma5'
});

connection.connect(function(err) {
    if (err) 
      console.log('Erro na CONEXÃO com o BD')
    else
      console.log('CONEXÃO com BD OK!');
});

module.exports = connection;
