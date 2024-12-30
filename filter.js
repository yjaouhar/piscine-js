function filter(arr, func) {
    let sl = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            sl.push(arr[i])
        }
    }
    return sl
}

function reject(arr, func) {
    let sl = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            sl.push(arr[i])
        }
    }
    return sl
}

function partition(arr, func) {
    return [filter(arr,func),reject(arr,func)]
}