/**
 * A program to check whether a word is a pallindrome using a stack
 */

//stack
let letters = [];

let word = "was it a car or a cat i saw";
let rword = "";

//put letters in a stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (word === rword) console.log(word + " is a pallindrome.");
else console.log(word + " is not a pallindrome.");

/**
 * racecar //-> racecar is a pallindrome.
 * keyman //-> keyman is not a pallindrome.
 */
