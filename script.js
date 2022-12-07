function Limpar(id1, id2){
    document.getElementById(id1).value="";
    document.getElementById(id2).value="";
}

function Calcular(num1, num2, operacao, saida) {
    var num1 = document.getElementById(num1).value;
    var num2 = document.getElementById(num2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    if (num1 != "" && num2 != "") {
        var expressao = num1 + operador + num2;
        resultado = eval(expressao);
        switch(operador){
            case '-':
                document.getElementById(saida).innerHTML = "A diferença entre " + num1 + " e " + num2 + " é " +resultado;
                break;
            case '*':
                document.getElementById(saida).innerHTML = "O produto entre " + num1 + " por " + num2 + " é " +resultado;
                break;
            case '/':
                document.getElementById(saida).innerHTML = "O quociente de " + num1 + " dividido por " + num2 + " é " +resultado;
                break;
            default:
                document.getElementById(saida).innerHTML = "A soma de " + num1 + " e " + num2 + " é " +resultado;
        }
    } else {
        document.getElementById(saida).innerHTML = "Não é possível realizar nenhuma operação sem colocar os valores nos campos";
    }
}