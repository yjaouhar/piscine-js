function isPositive(num){
        return num>0 
};

function abs(num){
    let mult =1
    if (num<0){
        mult=-1
    }
    return mult*num
};

console.log(abs(5))

