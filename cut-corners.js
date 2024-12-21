function round(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0){
                let res = sep(arr[i])
                 let n = arr[i]-res

            if (n<0.5){
                arr[i]=res
            }else{
                arr[i]=res+1
            }
        }else{
            let res = sep(arr[i])
            let n = res-arr[i]  
            if (n<=0.5){
                arr[i]=res
            }else{
                arr[i]=res-1
            }
        }
    }

return arr
};


function trunc(arr){

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0){
            let res = sep(arr[i])
            arr[i]=res
        }else{
            let res = sep(arr[i])
            arr[i]=res
        }
    }
return arr
};

function floor(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0){
            let res = sep(arr[i])
            arr[i]=res
        }else{
            let res = sep(arr[i])
            arr[i]=res-1
        }
    }
return arr
};
function ceil(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0){
            let res = sep(arr[i])
            arr[i]=res+1
        }else{
            let res = sep(arr[i])
            arr[i]=res
        }
        
    }
return arr
};



function sep(num){
    let n=0
    let isN = false
    if (num<0){
       
        num=-num
        isN = true
    }
    for (let i = 0; i <= num; i++) {
        n=i   
    }
    if (isN===true){
        n=-n
    }
    return n
};
