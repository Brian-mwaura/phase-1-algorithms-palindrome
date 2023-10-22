{
  function isPalindrome(str) {
     // Write your algorithm here
    // Remove any non-letter characters and convert to lowercase
    const formattedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    
    // Reverse the formatted string
    const reversedStr = formattedStr.split("").reverse().join("");
    
    // Check if the original and reversed strings are equal
    return formattedStr === reversedStr;
  }
  
  // Test cases
  console.log(isPalindrome("madam")); // Output: true
  console.log(isPalindrome("robot")); // Output: false
  console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
  
}

/* 
  Add your pseudocode here
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
