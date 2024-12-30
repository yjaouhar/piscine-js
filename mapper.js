function map(arr, func) {    
    let sl=[]
    for (let i = 0; i < arr.length; i++) {
        sl.push(func(arr[i],i,arr))
    }
    return sl
}

function flatMap(arr, func) {
    let sl = []
    let slr = []
    for (let i = 0; i < arr.length; i++) {
        sl.push((func(arr[i], i, arr)))
    } 
    for (let j = 0; j < sl.length; j++) {
        if (Array.isArray(sl[j])) {
             for (let l = 0; l < sl[j].length; l++) {
            slr.push(sl[j][l])   
        }    
        } else {
            slr.push(sl[j])
        }
    }
    return slr
}


