function processData(input) {
  
  mid = input.Length / 2
  last = input.Length - 1
  sort(input)
  input[mid], input[last] = input[last], input[mid];


  let left = mid + 1
  let right = last - 1

  while (left < right){
      input[left], input[right] = input[right], input[left];

      left++
      right--
  }
return input   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
