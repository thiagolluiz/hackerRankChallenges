'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    let repet = arr.length;
    let positivos = 0;
    let zero = 0;
    let negativos = 0;

    for (let i = 0; i < repet; i++){
        if(arr[i] > 0 ){
            positivos++;
        }else if(arr[i] == 0){
            zero++
        }else{
            negativos++
        }
    }
    positivos = positivos / repet ;
    zero = zero / repet ;
    negativos = negativos / repet ;
    
    
    console.log(positivos.toFixed(6)); 
    console.log(negativos.toFixed(6)); 
    console.log(zero.toFixed(6))
  
}   
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}