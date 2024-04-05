function isPalindrome(word) {
  // Write your algorithm here
 return word===word.split("").reverse().join("");
}
console.log(isPalindrome("pay"));

/* 
  Add your pseudocode here
  Split the string into an array of characters.
  Reverse the array of characters.
  Join the reversed characters back into a string.
  Check if the original string is equal to the reversed string.
  If they are equal, return true, indicating that it's a palindrome; otherwise, return false.
*/

/*
  Add written explanation of your solution here
  The function returns true or false depending on if the value of the word when reversed is equal to the original word.
  The word is first split into a string using .split("") then its reversed using .reverse() then finally joined using .join("").
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
