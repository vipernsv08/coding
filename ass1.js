function isPalindrome(str){
let reversedString = str.split('').reverse().join('');
return str === reversedString;
}
let word = 'coding';
let isWordPalindrome = isPalindrome(word);
if(isWordPalindrome){
    console.log('${word} true');
}else{
    console.log('${word} false');
}