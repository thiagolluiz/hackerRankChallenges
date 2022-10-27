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
* Complete the 'caesarCipher' function below.
*
* The function is expected to return a STRING.
* The function accepts following parameters:
*  1. STRING s
*  2. INTEGER k
*/

function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const alphabetArray = alphabet.split("")

  let firstPart = [...alphabetArray]
  let rotatedAlphabet = firstPart.splice(k%26)
  rotatedAlphabet = [...rotatedAlphabet, ...firstPart]
  console.log(rotatedAlphabet);

  const converted = s.split("").map(letter => {
    const lowerString = letter.toLowerCase();
    const isLetterUpperCase = letter == letter.toUpperCase();
    const index = alphabetArray.indexOf(lowerString)

    if (index >= 0) {
      if (isLetterUpperCase) {
        return rotatedAlphabet[index].toUpperCase();
      }
      return rotatedAlphabet[index]
    } else {
    return letter
    }
  })

  return converted.join("")
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + '\n');

  ws.end();
}
