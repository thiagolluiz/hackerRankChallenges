'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) { 
    var elements = Array(100).fill(0);
    
    for(let i = 0; i < arr.length; i++){
        elements[arr[i]]++;
    }
    
    return elements;
}

/* let n= Math.max(...arr);
let elements= new Array(n%2===0 ? n+2 : n+1).fill(0);
arr.forEach(number => !elements[number].toFixed() ? elements[number] = 1 : elements[number] += 1); 

return elements; */

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
/*
=> diferenca entre map e forEach:
Na prática como vimos no começo do post, o map e o forEach parecem fazer a mesma coisa, porém a difrença vem quando analisamos o retorno do que sai delas a diferença fica clara.

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);
    return nomeAtual.toUpperCase();
})
console.log(retornoForEach) // undefined

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);
    return nomeAtual.toUpperCase();
})
console.log(retornoMap) // ['WHINDS', 'FREEWAY', 'TESTE', 'MARIA']


***Se você pegar os 3 códigos abaixo, todos eles irão ter o mesmo retorno no navegador.

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);
}

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
nomes.map(function(nome, i) {
    console.log('[forEach]', nome, i);
}) */