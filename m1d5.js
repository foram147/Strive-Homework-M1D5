console.log("------------------------ex1--------------------");


const areORectangle = function(h,w){
    return  h+w;
    }
    console.log("the are of retangle is " +areORectangle(10,12))
console.log("------------------------ex2--------------------");

const crazySum = function(a,b){
    if(a == b){
        return (a+b)*3;
    }
    else
    {
        return a+b;
    }
}
console.log("the final value is" +crazySum(5,5));

console.log("------------------------ex3--------------------");
const crazyDiffer = function(a,b){
    return Math.abs(a-b);
 }
 console.log("the absolute difference is " +crazyDiffer(2,19));


console.log("------------------------ex4--------------------");

const boundry = function(a){

    return (a>20 && a<100 || a==400 ? true : false);
    
    }
    console.log(boundry(400));

    console.log("------------------------ex5--------------------");
   
    const strivify = function(str1){
        if (str1 === "Strive"){
            return str1;
        }
        else {
            return "Strive " + str1;
        }
        
        }
        console.log(strivify("Strive"));

        console.log("------------------------ex6--------------------");
        const check3and7 = function(numToCheck){
            return (numToCheck % 3 ==0 || numToCheck % 7 == 0? true : false);
        }
        console.log(check3and7(75));

        console.log("------------------------ex9--------------------");

        const cutString = function(s){
            return s.substring(1, s.length - 1);
        }
        console.log(cutString("abcde"));

        console.log("------------------------ex10--------------------");
        const giveMeRandom = function(n){
            let n1= [];
            for(let i = 0;i<n ;i++){
                 n1.push(Math.floor(Math.random()*10));
                
            }
            return n1;
        }
        console.log(giveMeRandom(5));



