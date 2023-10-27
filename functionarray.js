function findSecondLowestandGreatest(array)
{
    if (array.lenght < 2 )
    {
        return ' array should have atleast 2 numbers'
    }
    array.sort (function(a,b)
    {
        return a-b 
    });
    var secondLowestNumber = array[1]
    var secondGreatestNumber = array[array.length-2]
    return {
        secomdLowestNumber: secondLowestNumber, 
        secondGreatestNumber: secondGreatestNumber
    }
}
let number = [2,13,6,9,7]
let result = findSecondLowestandGreatest(number)
console.log(result)