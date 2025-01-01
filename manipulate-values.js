
function filterValues(obj, func) {
    let slr = Object.entries(obj)
    let sl = []
    for (let i = 0; i < slr.length; i++) {
        if (func(slr[i][1], i, slr)) {
            sl.push([slr[i][0], slr[i][1]])
        }
    }
    return Object.fromEntries(sl)
}

function mapValues(obj, func) {
    let slr = Object.entries(obj)
    let sl = []
    for (let i = 0; i < slr.length; i++) {
        sl.push([slr[i][0], (func(slr[i][1], i, slr))]
        )
    }
    return Object.fromEntries(sl)
}

function reduceValues(obj, func, acc) {
    let slr = Object.entries(obj)
    let str = 0
    if (acc === undefined) {
        acc = slr[0][1]
        str = 1
    }
    for (let i = str; i < slr.length; i++) {
        acc = func(acc, slr[i][1])

    }
    return acc
}