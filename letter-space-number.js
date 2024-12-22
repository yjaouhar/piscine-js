function letterSpaceNumber(str) {
    let arr=[]
    let res = /[A-Za-z] \d\b/g
    arr=str.match(res)
    if (arr===null){
        return null
    }
    return arr 
};

