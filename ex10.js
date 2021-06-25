const giveMeRandom = function(n){
    let n1= [];
    for(let i = 0;i<n ;i++){
         n1.push(Math.floor(Math.random()*10));
        
    }
    return n1;
}
console.log(giveMeRandom(5));