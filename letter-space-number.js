function letterSpaceNumber(str) {
    let arr=[]
    let res = /[A-Za-z] \d\b/g
    arr=str.match(res)
    // console.log(arr);
    
    if (arr===null){
        return []
    }
    return arr 
};

console.log(letterSpaceNumber("example 1d, example 20"));
