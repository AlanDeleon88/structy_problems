let gameCoordinates = [
  [ 2, 1 ],
  [ 4, 3 ],
  [ 6, 5 ],
  [ 8, 7 ],
  [ 10, 9 ],
];

function transposeArray(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push([]);

    for (let j = array[i].length - 1; j >= 0; j--) {
      newArray[i].push(array[i][j]);
    }
  };

  return newArray;
}

console.log('original', transposeArray(gameCoordinates));
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]

const revisedTranspose = (array) =>{
  for(let i = 0; i < array.length ; i++){
    let temp = array[i][0]
    array[i][0] = array[i][1]
    array[i][1] = temp
  }
  return array
}
revisedTranspose(gameCoordinates)
console.log('refactored', gameCoordinates);
