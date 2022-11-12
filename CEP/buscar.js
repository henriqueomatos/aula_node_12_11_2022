function buscarEndereco () {
    let numeros = cep.value;
    
    if (numeros.length !== 8)  {
        alert('CEP inválido');
        return;
    }
    
    fetch (`http://viacep.com.br/ws/${numeros}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            uf.value = dados.uf;
        });

}