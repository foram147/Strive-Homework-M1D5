function reverseString(stringToReverse) {
    var splitedString = stringToReverse.split(""); 
     var reversedArray = splitedString.reverse();  
     var joinArray = reversedArray.join(""); 
    return joinArray; 
}
 
console.log(reverseString("foram"));