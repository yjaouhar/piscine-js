function triangle(sep, n) {
    let str=""
    
        for (let i = 0; i < n; i++) {
            if (i!==0){
                str+="\n" 
            }
            for (let j = 0; j<=i; j++) {
               
                str+=sep
            }
            
        }
        return str
    };
    
  
    