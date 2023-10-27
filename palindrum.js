function isPalindrome(str){
    //Remove spaces and convert string to lowercase
    str = str.replace(/\s/g,'').toLowerCase();
    // check if the string is equal to it's reverse
    return str == reverseString(str);
}
function reverseString(str){
    return str.split('').reverse().join('');
}
//Example usage:
let string = 'A man plan a canal panama';
let result = isPalindrome(string)
console.log(result);//Output: true