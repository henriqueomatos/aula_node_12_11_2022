function list (){
    //buscar os dados do banco de dados
    let produtos = [
        {
            id: 1,
            nome: 'Relogio',
            valor: 489.95
        },

        {
            id: 2,
            nome: 'Pendrive de fumar',
            valor: 199.12
        }
    ];

    //retornar os dados como JSON la pra recepcao
    return JSON.stringify(produtos);

    

}
function add (){
    return "Adicionando produtos...";

}

module.exports = {
    add,
    list,
};