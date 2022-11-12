const http = require('http'); //importando a lib http no node
const produto = require('./produto');
const cliente = require('./cliente');

const servidor = 'localhost';
const porta = '8000';



function recepcao(req, res){
    const rota = req.url;

    const rotas = {
        '/produto/adicionar': produto.add,
        '/produto/listar': produto.list,
        '/cliente/adicionar': cliente.add,
        '/cliente/listar': cliente.list,
    };
    
    if (undefined === rotas[rota]){
        return res.end('Erro 404');
    }

    let resultado = rotas[rota];

    res.end(resultado());
   /* if (rota === '/listar'){
        res.end(produto.list());
    } else if (rota === '/adicionar'){
        res.end(cliente.add());
    } else {
        res.end('Em que posso ajuda-lo');
    }
    */
   

};

http.createServer(recepcao).listen(porta, servidor);