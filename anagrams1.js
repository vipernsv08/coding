function areAnagrams(str1, str2 )
{
str1 = str1.replace(/\s/g,'').toLowerCase();
str2 = str2.replace(/\s/g,'').toLowerCase();
//Check if the sorted characters in both strings are equal
return sortString(str1) === sortString(str2);
}
function sortString(str)
{
    return str.split('').sort().join('')
}
//Example usage:
const string1 = 'listen';
const string2 = 'silent';
const result = areAnagrams(string1, string2);
console.log(result); //Output: true
