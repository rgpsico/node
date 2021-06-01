const app = require('./app');

//rotas
app.set('port', 7777);

//configurações
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta " + server.address().port);
})