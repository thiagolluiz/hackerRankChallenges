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
    let amPm = (s.endsWith('AM') ? 0 : 12);
    // Checking if is Am or Pm, if is AM, the amPm equals 0, if is not equals 12

    let timeParts = s
    // Taking "s" as timeParts

        .substring(0, s.length-2) 
        //  => .substring() = O parametro 0 pega todos os elementos, quando usa o s.length-2 diz para remover todos elementos a partir do penúltimo elemento, se for usado o .substring() com só um paramtro, ele irá remover todos os elementos para frente a partir daquele ponto
        //  => .substr() = diferente do .substring(), esse metodo extrai os elemento a partir do parametro que você define, e se inserido um segundo parametro ele limita os elementos extraidos 
        // Ex.: text = "Hello world!";   text.substr(6, 3);   output = "wor"

        .split(':');
        // Split into [hour, min, sec]
        // Converting to a array every ":", ex.: 07:05:45 to [ '07', '05', '45' ]

    timeParts[0] = (Number(timeParts[0]) % 12 + amPm)
    // Convert by using modulo 12 and adding 12 if PM
    // Take argument(imeParts[inThisPosition]), the of divide by 12 plus amPm

        
        .toString() 
        // Converting to String type
        
        .padStart(2, '0');
        // Return 2 arguments, completing with 0, 
        // Add 0 in front of String
        /* --------------------------- */
        //Ex.: const str1 = '25';
        //console.log(str1.padStart(6, '1'));
        // expected output: "111125"

    return timeParts.join(':'); 
    // Rebuild time string
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
