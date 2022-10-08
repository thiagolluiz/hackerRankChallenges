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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
      
    arr.sort((a, b) => a - b);
    let repeat = arr.length;
    let sum = 0;
    let mini = 0;
    let max= 0;

    for (let i = 0; i < repeat; i++){
        sum = sum + arr[i];
        }
    mini = sum - arr[repeat-1] ;
    max = sum - arr[0] ;

    console.log(mini, max);


}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
