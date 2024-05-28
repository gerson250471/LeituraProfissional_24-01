// 01 - Objeto window
/* 
    O objeto window é o contâiner por fora do DOM, contém informações e funções que afetam a janela atual do navegador: 

    > window.location.href 
    Pega a URL atual do navegador ou faz com que o navegador acesse a URL especificada. 
    Experimente usar um console.log(window.location.href). 

    > window.location.search
    Pega a querystring atual do navegador. 
    Experimente usar um console.log(window.location.search).

    > window.location.reload() 
    Atualiza a página atual (F5)

    > window.history
    Acessa o objeto de histórico do navegador, permite inclusive voltar para a página anterior. 

    > setTimeout(function, delay)
    Função nativa do objeto window que atrasa o disparo de uma função JS em um tempo definido em milissegundos. 

    > setInterval(function, interval)
    Semelhante ao setTimeout, mas dispara a mesma function a cada x milissegundos.
    Como retorno à chamada deste método é passado o ID do timer, que pode ser cancelado usando a função clearInterval(id). 
    
    > setImmediate(function) Executa a function exatamente agora, 
    mas por uma thread em background. Muito útil para processamento não-bloqueante.
    
    - window.location.href 
*/
console.log(window.location.href);

console.log(window.location.search);

// Pop ups
/*
    Popups são aquelas janelinhas, muitas vezes irritantes, que saltam no navegador e são fornecidas pela API DOM
    da janela do navegador (window).
    Se bem utilizadas podem ser muito úteis para exibir informações ao usuário, por exemplo.
    alert(message) Exibe um popup com uma mensagem dentro e um botão de ok
    . É um atalho para window.alert(message).
    confirm(message) 
    Exibe um popup com uma mensagem dentro (geralmente um questionamento) e dois botões:
    ok e cancelar. Caso o usuário clique em ok, esta função irá retornar true,
    caso contrário false. É um atalho para window.confirm(message).
*/

// on click

function exibirMensagem(){
    alert("Graças a Deus funcionou");
}

// on change
function exibirUF(uf){
    alert(uf);
}

function exibeMensagemMouse(msg){
    alert(msg);
}

// onfocus
function exibeMensagemO(msg){
    alert(msg);
}

// onkeypress, onkeydown e onkeyup
function validarNumeros(e){
    let letra = e.charCode ? e.charCode: e.keyCode;
    if(letra!=8){
        if(letra<48||letra>57){
            return false;
        }
    }
}