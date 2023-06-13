//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
function addToZero(numbers){
    for(let i = 0; i < numbers.length; i++){
        const num = numers[i];
        if (numbers.includes(-num, i + 1)){
            return true;
        }
    }
    return false;
}


//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function Unique(word){
    for(let i = 0; i < word.length; i++){
        if(word.indexOf(word[i], i + 1) !== -1){
            return false;
        }
    }
    return true;
    
}console.log(Unique("hello"));


//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.
function isPangram(sentence){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
    const lowercaseSentence = sentence.toLowerCase();
    for (let letter of alphabet){
        if (!lowercaseSentence.includes(letter)){
            return false;
        }
    }
    return true;

} console.log(isPangram("The quick brown fox jumps over the lazy dog."));


//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
function find_longest_word(words){
    let longestLength = 0;
    for(let word of words){
        if (word.length > longestLength){
            longestLength = word.length
        }
    } return longestLength;
}
const words = [`hi`, `hello`, `baaaa`, `iamthelongestwordpleasepickme`]
console.log(find_longest_word(words));