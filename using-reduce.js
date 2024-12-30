function adder(arr,number=0) {
    return arr.reduce((acc,nb)=>acc+nb,number)
}

function sumOrMul(arr, number=0) {
    return arr.reduce(function (acc,nb) {
        if (nb % 2 === 0) {
            acc *=nb
        } else {
           
            acc +=nb
        }
        return acc
    },number)
}

function funcExec(arr, number) { 
    return arr.reduce((acc,func)=>func(acc),number)
}