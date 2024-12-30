function indexOf(arr,val,from){
   let start = 0
    if (typeof from!=="undefined"){
        start=from
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i]==val){
            return i    
        }
    }
return -1
};

function lastIndexOf(arr,val,from){
    let start = arr.length
    if (typeof from!=="undefined"){
        start=from
    }
    for (let i = start; i >=0 ; i--) {
        if (arr[i]==val){
            return i    
        }
    }
return -1
};

function includes(arr,val){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==val){
            return true   
        }
    }
    return false
};

