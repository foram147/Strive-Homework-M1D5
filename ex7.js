const reversString = function(str1){
    let newString
    for(let reversedString = str1.length - 1; reversedString >=0;reversedString++){
    newString  = str1[reversedString];
function reverseString(stringToReverse) {
    var splitedString = stringToReverse.split(""); 
     var reversedArray = splitedString.reverse();  
     var joinArray = reversedArray.join(""); 
    return joinArray; 
}
 
console.log(reverseString("foram"));