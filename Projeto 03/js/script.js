// Atualizar o display da calculadora
function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if (display.value.length === 9)
        return;
    if(display.value === '0') {
        display.value = btn.value;
    } else {
        display.value += btn.value;
    }
}

// Limpando Display
function limparDisplay(){
   document.getElementById('display').value=0;
}

// Guardando a operação que foi teclada
let operador='';
let valor1=0;
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    valor1 = parseInt(display.value);
    display.value ='0';
}

// Realizando o cálculo
function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseInt(display.value);
    const total = eval(valor1 + operador + valor2);
    display.value=total;
    operador='';
}

// obter os números diretamente do teclado
function manipularTeclado(){
    if(/[0-9]/.test(event.key)){
        atualizarDisplay({value:event.key});
    }
}