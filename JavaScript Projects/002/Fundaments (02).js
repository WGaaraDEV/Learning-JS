/*
    Escrito por: 👨‍🔬 Cauã » FridayLab™    
    Cauã apresenta:
    Projeto 002 » Fundamentos do JavaScript - Parte 2.
*/

/*
     Comentários:
    Você pode colocar comentários em códigos JavaScript, assim como no CSS:
     Exemplo:
    // Comentário qualquer.
    Isso tudo é um comentário.
*/

/*
     Operadores:
    Um operador é um símbolo matemático que produz um resultado baseado em dois valores (ou
    variáveis). Na tabela a seguir, você pode ver alguns dos operadores mais simples, alem de
    alguns exemplos para experimentar no Node.JS
    
     Adição X Concatenação {
         Explicação: "Usado para somar dois números ou juntar duas strings.",
         Símbolo(s): "+",
         Exemplos: [
             6 + 9,
             "Hello" + " world!";
         ]
     },
     Subtrair X Multiplicar X Dividir {
         Explicação: "Fazem exatamente o que você espera que eles façam na matemática básica.",
         Símbolo(s): [
             -,
             *,
             /
         ]
         Exemplos: [
             9 - 3,
             8 * 2, // no JS a multiplicação é representada por um asterisco.
             9 /3
         ]
     },
     Operador de atribuição {
         Explicação: "Você já viu essa, ela associa um valor a uma variável.",
         Símbolo(s): = 
         Exemplos: 
             var myVar = "Bob"
     },
     Operador de igualdade {
         Explicação: "Faz um teste para ver se dois valores são iguais um ao outro, retornando um resultado true/false (booleano).",
         Símbolo(s): ===
         Exemplos: 
             var myVariable = 3;
             myVariable === 4; // obviamente irá retornar false, pois o valor declarado nesta variável não é igual a 4.
     },
     Negação, não igual {
         Explicação: "Retorna o valor lógico oposto do sinal; transforma um true em um false, etc. Quando usado junto com o operador de igualdade, o operador de negação testa se os valores são diferentes.",
         Símbolo(s): [
             !,
             !==
         ]
         Exemplos: 
         var myFalse = 3;
         !(myFalse === 3) // aqui estamos perguntando: myFalse NÃO seria igual a 3? O retorno é "false"
         porque myFalse é DE FATO igual a 3.
     }
     Há vários outros operadores para explorar, sério, mas esses são suficientes, por enquanto...

     Nota:
        Misturar tipos de dados pode levar a resultados estranhos (inesperados) quando uma operação
        é executada, portanto, tome cuidado para declarar suas variáveis corretamente, e você obterá
        os resultados esperados. Por exemplo, teste em seu NODE.JS o seguinte código:
        "35" + "25". Por que você não teve o resultado esperado? Porque as aspas transformam os números
        em strings, você acabou concatenando (unindo) strings em vez de somar os números. Se você digitar
        35 + 25, você obtera o resultado esperado.
*/
