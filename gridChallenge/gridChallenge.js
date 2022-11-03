function gridChallenge(grid) {
  // Write your code here
  let i = 0;
  let newGrid = [];
  while(i < grid.length){
      let row = grid[i];
      let sortedRow = row.split("").sort();
      sortedRow = sortedRow.join("");
      newGrid.push(sortedRow);
      i++;
  }


  for(let i = 0; i<newGrid[0].length; i++){
      let colWord = ""
      for(let j=0; j<newGrid.length; j++){
          colWord += newGrid[j][i];
      }
      let sortedWord = colWord.split("").sort().join("")  
      if(sortedWord !== colWord){
          return "NO";
      }
  }
  return "YES";
}