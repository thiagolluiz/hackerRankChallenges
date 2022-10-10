const texto = 'hello world';
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [49, 64, 16, 4];
console.log('Texto: ', texto);
console.log('Array Frutas: ', fruit);
console.log('Array Numeros: ', numbers  );

const omitir = texto.substring(3,6) // Omitir
console.log("Usar o substring: ",omitir) 
// string.substring(start, end) 
// start => Required. Start position. First character is at index 0. 
// end => Optional. End position (up to, but not including). If omitted: the rest of the string.

const extrair = texto.substr(3,6) // Extrair
console.log("Usar o substr: ",extrair);
// string.substr(start, length)
// start => Required. The start position. First character is at index 0. If start is greater than the length, substr() returns "".  If start is negative, substr() counts from the end of the string.
// length => Optional. The number of characters to extract. If omitted, it extracts the rest of the string

const final = texto.endsWith('hello',5 ) // Finaliza com
console.log("Usar o endsWith: ",final ? 'true Answer' : 'wrongA nswer'); // criando uma condicional com endsWtith
// string.endsWith(searchvalue, length)
// searchvalue => Required. The string to search for.
// length => Optional. The length of the string to search. Default value is the length of the string.
// Return => A boolean;	true if the string ends with the value, otherwise false.

const testSplit = texto.split("", 5) // Dividir
console.log("Usar o split: ",testSplit);
// string.split(separator, limit)
// separator => Optional. A string or regular expression to use for splitting. If omitted, an array with the original string is returned.
// limit => Optional. An integer that limits the number of splits. Items after the limit are excluded.

const testSlice = texto.slice(3,8) // Fatiar
console.log("Usar o slice: ",testSlice);
// array.slice(start, end)
// start => Optional. Start position. Default is 0. Negative numbers select from the end of the array.
// end => Optional. End position. Default is last element. Negative numbers select from the end of the array.

fruit.splice(2, 0, "Lemon", "Kiwi"); // Emendar
console.log("Usar o splice: ",fruit);
// array.splice(index, howmany, item1, ....., itemX)
// index => Required. The position to add/remove items. Negative value defines the position from the end of the array.
// howmany => Optional. Number of items to be removed.
// item1, ..., itemX => Optional. New elements(s) to be added.
// Return => An array containing the removed items (if any).

const estouro = fruit.pop(); // Remover
console.log("Usar o pop: ",fruit);  // remove Mango
// array.pop()
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.

const Adicionar = fruit.push("Caqui", "Jaca"); // Adicionar
console.log("Usar o push: ",fruit);  // Adiciona as Caqui e Jaca
// array.push(item1, item2, ..., itemX)
// item1 => The item(s) to add to the array. item2 => Minimum one item is required. .. itemX
// The push() method adds new items to the end of an array. The push() method changes the length of the array. The push() method returns the new length.

const newArr = numbers.map(myFunction) // Mapear usando uma function
const newArr2 = numbers.map(Math.sqrt) // Mapear usando uma função Raiz Quadrada
function myFunction(num) {
  return num * 10;}
console.log("Usar o map com função: ", newArr);
console.log("Usar o map com raiz quadrada: ",newArr2);
// array.map(function(currentValue, index, arr), thisValue)
// function() => Required. A function to be run for each array element.
// currentValue => Required. The value of the current element.
// currentValue	=> Required. The value of the current element.
// arr => Optional. The array of the current element.
// thisValue => Optional. Default value undefined. A value passed to the function to be used as its this value.

const converteParaString = fruit.toString();
console.log("Usar o toString: ",converteParaString);
// string.toString()

// https://www.w3schools.com/jsref/jsref_sort.asp
// https://www.w3schools.com/jsref/jsref_indexof_array.asp
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// https://www.w3schools.com/jsref/jsref_isarray.asp
// https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_fill.asp
// https://www.w3schools.com/jsref/jsref_find.asp
// https://www.w3schools.com/jsref/jsref_shift.asp
// https://www.w3schools.com/jsref/jsref_unshift.asp
// https://www.w3schools.com/jsref/jsref_join.asp
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_forEach.asp
// https://www.w3schools.com/jsref/jsref_replace.asp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp