function multiply(a,b){
    let isnegativ=false
    let res =0
    if (a<0){
        a=Math.abs(a)
        isnegativ =true
    }
    for (let mult = 1; mult <= a; mult++) {
        res+=b
    }
    if (isnegativ===true){
        res=-res
    }
 
return res
};
function divide(a,b){
    let count = 0
    let isnegativ=false
    if (a<0 || b<0){ 
     isnegativ=true
     if (a<0 && b<0){
        isnegativ=false
    }
        if (a<0){  
            a=Math.abs(a)
        }
         if (b<0){  
            b=Math.abs(b)
        }
    }
   
    while (a>0) {
       a-=b
       if (a>=0){
          count++
       }
    }
    if (isnegativ===true){
        count=-count
    }
    return count

};
function modulo(a,b){;
    let isnegativ=false
    if (a<0 || b<0){
        
        if (a<0){  
            isnegativ=true
            a=Math.abs(a)
        }
         if (b<0){  
            b=Math.abs(b)
        }
    }
    if (a<b){
        return a
    }
    let mod =a-b
    while (mod-b>0) { 
            mod-=b 
     }
     if (isnegativ===true){
        mod=-mod
     }
     return mod
};
