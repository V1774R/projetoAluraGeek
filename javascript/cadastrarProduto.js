import { conectaApi } from "./conectaApi.js";
import { gerarCard } from "./mostrarProdutos.js";

//Elementos HTML
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const msgErro = document.querySelector('.msgErro');

//Event listeners
btn.addEventListener('click', async (e)=>{
    e.preventDefault();
    const nome = document.querySelector('.nome');
    const valor = document.querySelector('.valor');
    const url = document.querySelector('.url');
    if(nome.value == '' && valor.value == '' && url.value == ''){
        msgErro.innerHTML = "Todos os campos são obrigatórios. Tente novamente.";
    }else if(nome.value == ''){
        msgErro.innerHTML = "O campo nome não pode ficar vazio.";
    }else if(valor.value == ''){
        msgErro.innerHTML = "O campo valor não pode ficar vazio.";
    }else if(url.value == ''){
        msgErro.innerHTML = "O campo URL da Imagem não pode ficar vazio.";
    }else{
        const produto = {
            "nome": nome.value,
            "valor": valor.value,
            "urlImg": url.value
        }
        await conectaApi.inserirProduto(produto);
        gerarCard();
        btn2.click();
    }
})