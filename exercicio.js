document.getElementById("botaoCalcular").addEventListener("click", function(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;

    document.getElementById("resultado").innerHTML=
    "Soma: " + soma + "<br>" +
    "Subtração: " + subtracao + "<br>" +
    "Multiplicação: " + multiplicacao + "<br>" +
    "Divisão: " + divisao;
    
});