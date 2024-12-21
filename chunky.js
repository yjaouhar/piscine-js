function chunk(arr, val) {
    let sl = []
    let array = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (count === val) {
            array.push(sl)
            count = 0
            sl = []
        }
        sl.push(arr[i])
        count++

        if (i === arr.length - 1) {
            array.push(sl)
        }
    }
    return array
}


