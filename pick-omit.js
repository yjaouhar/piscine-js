function pick(obj, arr) {
    let new_obj = new Object()
    if (Array.isArray(arr)) {

        for (let item in obj) {
            if (arr.includes(item)) {
                new_obj[item] = obj[item]
            }
        }
    } else {
        for (let item in obj) {
            if (item === arr) {
                new_obj[item] = obj[item]
            }
        }
    }
    return new_obj
}

function omit(obj, arr) {
    let new_obj = new Object()
    if (Array.isArray(arr)) {
        for (let item in obj) {
            if (!arr.includes(item)) {
                new_obj[item] = obj[item]
            }
        }
    } else {
        let copyobjet = Object.fromEntries(Object.entries(obj))
        for (let item in copyobjet) {
            if (item !== arr) {
                new_obj[item] = obj[item]
            }
        }
    }
    return new_obj
}
console.log((omit({ something: 5, __proto__: { d: 6 } }, 'something')));
