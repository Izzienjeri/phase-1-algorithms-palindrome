function isPalindrome(word) {
  // Write your algorithm here
  let isItPalindrome = true;
  for ( let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length -1 -i]) {
      isItPalindrome = false;
      break;
    }
  }
  if (isItPalindrome) {
    return (true)
  } else {
    return (false);
  }


}

/* 
  Add your pseudocode here
  declare function isPalindrome() that takes in a string as an argument 
  initialize a variable isItPalindrome to true
  loop over half of the letters in the passed in string:
  if current letter is not equal to the corresponding one on the other end of the word, return false
  bring in an if statement that returns true if isItPalindrome is true and false if otherwise

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
