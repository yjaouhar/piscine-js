function ionOut(str) {
    let reg = /\w*tion/g
    let arr = str.match(reg)
    if (arr == null) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace("tion", "t")

    }
    return arr
}
