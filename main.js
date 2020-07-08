/* REMOVE DUPLICATES

Given an array of letters where some or all of the letters have duplicate values, return a new array of only a unique instance of each letter

const letters = ['a','a','b','b','c', 'c', 'd', 'e', l', 'l']

uniqueLetters(letters)
RETURNS: [a,b,c,d,e,l]
*/


// SOLVE IT USING A FOR LOOP & AND ARRAY.INDEXOF()

// PSEUDOCODE GOES HERE
/*

*/

// const letters = ['a','a','b','b','c', 'c', 'd', 'l', 'l']

// // FOR LOOP & INDEXOF
// const uniqueLetters = arr => {
//   let outcome = []
//   outcome.push(arr[0])

//   for(let i=1; i<arr.length; i++){
//     if(outcome.indexOf(arr[i]) < 0){
//       outcome.push(arr[i])
//     }
//   }

//   // arr.forEach(letter => {
//   //   if(outcome.indexOf(letter) < 0){
//   //     outcome.push(letter)
//   //   }
//   // })

//   return outcome
// }

// console.log('this is uniqueLetters', uniqueLetters(letters))

// ************************************//
// ONCE COMPLETE COMMENT OUT THE ABOVE CODE INCLUDING THE CONSOLE LOGS
// ************************************//


// SOLVE IT USING ARRAY.FILTER() & AND ARRAY.INCLUDES()

// PSEUDOCODE GOES HERE
/*
  FUNCTION uniqueLetters takes arr of chars
    FOR each char in arr
      IF char doesn't exist past it's index
        RETURN char
      END IF
    END FOR
  END FUNCTION
*/


// UNCOMMENT THE BELOW CODE TO BEGIN

const letters = ['a','a','b','b','c', 'c', 'd', 'l', 'l']

const uniqueLetters = (arr) => {
  return arr.filter((letter, index) => {
    if(!arr.includes(letter, index+1)){
      return letter
    }
  })
}

console.log('this is uniqueLetters', uniqueLetters(letters))

// ************************************//
// ONCE COMPLETE COMMENT OUT THE ABOVE CODE INCLUDING THE CONSOLE LOGS
// ************************************//

// SOLVE IT USING RECURSION 

// PSEUDOCODE GOES HERE

// UNCOMMENT THE BELOW CODE TO BEGIN

// const letters = ['a','a','b','b','c', 'c', 'd', 'l', 'l']

// const uniqueLetters = (arr, lettersArr  = []) => {
//   if(arr.length > 1){
//     char = arr.shift()
//     if(!lettersArr.includes(char)){
//       lettersArr.push(char)
//       return uniqueLetters(arr, lettersArr)
//     } else{
//       return uniqueLetters(arr, lettersArr)
//     }
//   }
//   return lettersArr
// }

// console.log('this is uniqueLetters', uniqueLetters(letters))
