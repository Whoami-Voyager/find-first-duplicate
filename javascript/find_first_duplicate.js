function findFirstDuplicate(arr) {
  const dupVar = []
  for (const number of arr){
    if (dupVar.includes(number) === false){
      dupVar.push(number)
    } else if (dupVar.includes(number) === true) {
      return number
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 
