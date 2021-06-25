const upperFirst = function(s){
    let newString = s.split("");
        for(let i = 0; i >=newString.length; i++){
        return newString[i].charAt(0).toUpperCase()+ newString[i].slice(1);
    }
}
console.log(upperFirst("hi hello"));
