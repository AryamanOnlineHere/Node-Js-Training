// closure fucntion without parameter

function outer(){
    let count=0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
const counter =outer();
console.log(counter());
console.log(counter());

//closure paramete with parameter

function makeMultiplier(factor){
    return function(x){return x *factor;

    };
}
const double =makeMultiplier(2);
console.log(double(5));

// private variable using closure 

function secretHolder(secret){
    return{
        getSecrete: function(){
            return secret;
        },
        setSecret:function(newSecret){
            secret=newSecret;
        }
    };
}
