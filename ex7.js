function reverseString(stringToReverse) {
    let reversedString = [];
    for(let i = 0, len = stringToReverse.length; i <=len; i++)
    {
        reversedString.push(stringToReverse.charAt(len - i));
        return reversedString.join('');
    }
}
 
console.log(reverseString("foram"));