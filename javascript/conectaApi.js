const listAll = async () => {
    try{
        const products = await fetch('https://api-alura-geek-2cgy.onrender.com/api');
        const productsJson = await products.json();
        return productsJson;
    }catch(error){
        console.log('Erro ao tentar acessar o servidor. '+error);
    }
}

const inserirProduto = async (produto) => {
    const configs = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(produto)
    }
    const conexao = await fetch(`https://api-alura-geek-2cgy.onrender.com/api`, configs);
    return conexao;
    
}

const deletar = async (id) => {
    try{
        const configs = {
            method: 'DELETE'
        }
        const produto = await fetch(`https://api-alura-geek-2cgy.onrender.com/api/${id}`, configs);
        return produto;
    }catch(error){
        console.log('Erro ao processar sua solicitação: '+error);
    }
}

export const conectaApi = {
    listAll,
    inserirProduto,
    deletar
}