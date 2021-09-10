/* Declarando funções dentro de variáveis*/
/*  1
function expression ou
function anonymous.
É chamada assim porque não tem nenhum valor declarado e apenas a "estrutura" */
const sum = function(){
    
}
// se eu fosse executar ela não daria nehum valor nem nada pois ela não tem nenhum valor declarado
sum()

// parâmetros (parameters)
/* logo depois de declarar, se eu somar o number 1 e o number2 não dará 3 porque logo em baixo eu "troquei" o valor deles e o resultado será "5" */
const sum = function(number1, number2){
    console.log(number1 + number2)
}


sum(2, 3)