function round(num){
    if (num-trunc(num)!==0){
        if (num>=0){
                let res = trunc(num)
                 let n = num-res 
            if (n<0.5){
                num=res
            }else{ 
                num=res+1
            }
        }else{
            let res = trunc(num)
            let n = res-num 
            if (n<=0.5){
                num=res
            }else{
                
                num=res-1
            }
        }
    }
return num
};

function floor(num){
    if (num-trunc(num)!==0){
        if (num>0){
            let res = trunc(num)
            num=res
        }else{
            let res = trunc(num)
            num=res-1
        }
    }
return num
};
function ceil(num){
    if (num-trunc(num)!==0){
         if (num>0){
            let res = trunc(num)
            num=res+1
        }else{
            let res = trunc(num)
            num=res
         }
    }
       
return num
};

function trunc(num){
    let n=0
    let isNeg = false

    if (num===-Infinity || num===+Infinity){
        return num
    }
    if (num>=100000000){
        return num
    }
    if (num<0){
       
        num=-num
        isN = true
    }
    for (let i = 0; i <= num; i++) {
        n=i   
    }
    if (isNeg===true){
        n=-n
    }
    return n
};

