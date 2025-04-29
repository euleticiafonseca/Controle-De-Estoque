// Informações do formulário
//armazenado em variaveis os campos do formulário
const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");
const produtoForm = document.getElementById("produto-form");

//manipulando o evento submit do formulario
produtoForm.addEventListener("submit", (event) => { 
    //impedir de recarregar a página quando o evento de submit(envio) for chamado 
    event.preventDefault();

    //valida se o campo está vazio e exibe uma mensagem
    if(nome.value== ''){
        document.getElementById("erro-nome").style.display = 'block';
    }else{
        document.getElementById("erro-nome").style.display = 'none';
    }
    if(nome.value== ''){
        document.getElementById("erro-categoria").style.display = 'block';
    }else{
        document.getElementById("erro-categoria").style.display = 'none;'
    }
    if(nome.value== ''){
        document.getElementById("erro-preco").style.display = 'block';
    }else{
        document.getElementById("erro-preco").style.display = 'none;'
    }
    if(nome.value== ''){
        document.getElementById("erro-quantidade").style.display = 'block';
    }else{
        document.getElementById("erro-quantidade").style.display = 'none;'
    }
    if(nome.value== ''){
        document.getElementById("erro-imagem").style.display = 'block';
    }else{
        document.getElementById("erro-imagem").style.display = 'none;'
    }
    if(nome.value== ''){
        document.getElementById("erro-produto-form").style.display = 'block';
    }else{
        document.getElementById("erro-produto-form").style.display = 'none;'
    }
});