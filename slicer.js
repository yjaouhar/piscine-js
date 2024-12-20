function slice(arr,from,ending){
    let start = 0
    let end = arr.length
    let res = ""
      if (typeof from!=="undefined"){
        start = from
      }
      if (typeof ending!=="undefined"){
        end = ending
      }
    if (end>=0&&start>=0){
       
      for (let i = start; i < end; i++) {
        res+=arr[i]
    }  
    }else{
        if(end<0){
            end=-end
        }   
        if (start<0){
            start=-start
        }
        if (end==arr.length){
            start=end-start
            end=0
        }    
        for (let i = start; i<(arr.length)-end; i++) {
            res+=arr[i]  
        }
    } 
    if (Array.isArray(arr)){
        res=res.split("")
    }
    return res
};


