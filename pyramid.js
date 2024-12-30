function pyramid(sep, n) {
    let str = ""
    let num = 1
    let m = ((n-1)*sep.length)
    for (let i = 0; i < n; i++) {
        if (i !== 0) {
            str += "\n"
        }
        for (let l = 0; l < m; l++) {
            str += " "
        }
        for (let j = 0; j < num; j++) {
            str += sep
        }
        m = m - sep.length
        num += 2
    }
    return str
};




