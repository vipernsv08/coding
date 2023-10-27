function reverseString(inputString){
    return inputString.split('').reverse().join('');
}
//Example usage:
const originalString = 'my name is jamiu i am a boy and i am learning java script';
const reversedString = reverseString(originalString);
console.log(reversedString);