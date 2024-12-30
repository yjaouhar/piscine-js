function cutFirst(str){
let res =""
for (let i = 0; i < str.length; i++) {
    if (i>=2){
        res+=str[i]
    }
}
return res
};
function cutLast(str){
    let res =""
   
for (let i = 0; i < str.length; i++) {
    if (i<str.length-2){
        res+=str[i]
    }
}
return res
};
function cutFirstLast(str){
    let res =""
    res=cutFirst(str)
    return cutLast(res)
};
function keepFirst(str){
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (i<2){
                    res+=str[i]
        }
    }
    return res
};
function keepLast(str){
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (i>=str.length-2){
                    res+=str[i]

        }
    }
    return res
};
function keepFirstLast(str){
    let keep1 = ""
    let keep2 = ""
    keep1 = keepFirst(str)
    keep2 =cutFirst(str)
    return keep1+keepLast(keep2)
};



