function reverse(arr){
    let str=[]
    for (let i = arr.length-1; i >=0 ; i--) {
        str.push(arr[i])
        
    }
    if (Array.isArray(arr)){
        return str
    };
return str.join("")
};

