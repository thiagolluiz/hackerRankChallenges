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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    ////////////

    let amPm = (s.endsWith('AM') ? 0 : 12);
    let timeParts = s
        // => .substring() = O parametro 0 pega todos os elementos, quando usa o s.length-2 diz para remover todos elementos a partir do penúltimo elemento, se for usado o .substring() com só um paramtro, ele irá remover todos os elementos para frente a partir daquele ponto
        // => .substr() = diferente do .substring(), esse metodo extrai os elemento a partir do parametro que você define, e se inserido um segundo parametro ele limita os elementos extraidos 
        //Ex.: text = "Hello world!";   text.substr(6, 3);   output = "wor"
        .substring(0, s.length-2) 
        // Split into [hour, min, sec]
        .split(':');
    // Convert by using modulo 12 and adding 12 if PM
    timeParts[0] = (Number(timeParts[0]) % 12 + amPm)
        .toString()
        .padStart(2, '0');
    return timeParts.join(':'); // Rebuild time string



/////////////////

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
