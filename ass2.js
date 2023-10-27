function areAnagrams(str1, str2){
    //Remove spaces and convert to lowercase
    let cleanStr1 = str1.toLowerCase().replace(/\s/g,'');
    let cleanStr2 = str2.toLowerCase().replace(/\s/g,'');

    //Sort the characters in both strings
    let sortedStr1 = cleanStr1.split('').sort().join('');

    //Compare the sorted strings
    return sortedStr1 === sortedStr2
}

let word1 = "listen";// You can change these words to test different strings
let word2 = "silent";
let areWordsAnagrams = areAnagrams(word1, word2);

if (areWordsAnagrams){
    console.log('${word1} and ${word2} true')
}else{
    console.log('${word1} and ${word2}false')
}
