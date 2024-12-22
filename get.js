
function get(src, path) {
    let result = path.split(".");
    let stk = src


    while (result.length > 0) {
        if (typeof(stk[result[0]]) === "undefined") {
            return undefined
        }
        stk = stk[result[0]]

        result.shift(result[0])

    }
    ;
    return stk
}


