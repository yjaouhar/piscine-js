function fold(arr, func, acc) {

    for (let i = 0; i < arr.length; i++) {
        acc = func(acc,arr[i])
    }
    return acc
}
function foldRight(arr, func, acc) {
    for (let i = arr.length-1; i >=0; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}

function reduce(arr, func) {
    let acc = arr[0]
    arr=arr.slice(1)
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}
function reduceRight(arr, func) {
    let acc = arr[arr.length-1]
    arr = arr.slice(0,arr.length-1)
    for (let i = arr.length-1; i >=0 ; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}