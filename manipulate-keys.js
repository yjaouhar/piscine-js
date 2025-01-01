
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))
function filterKeys(obj, func) {
    let slr = Object.entries(obj)
    let sl = []
    for (let i = 0; i < slr.length; i++) {
        if (func(slr[i][0], i, slr)) {
            sl.push([slr[i][0], slr[i][1]])
        }

    }
    return Object.fromEntries(sl)
}


function mapKeys(obj, func) {
    let slr = Object.entries(obj)
    let sl = []
    for (let i = 0; i < slr.length; i++) {
        sl.push([func(slr[i][0], i, slr), slr[i][1]])
    }
    return Object.fromEntries(sl)
}

function reduceKeys(obj, func, acc) {
    let slr = Object.entries(obj)
    let str = 0
    if (acc === undefined) {
        acc = slr[0][0]
        str = 1
    }
    for (let i = str; i < slr.length; i++) {
        acc = func(acc, slr[i][0])
    }
    return acc
}