
console.log(fusion({ a: "hello", b: [] }, { a: 4 }))
function fusion(obj1, obj2) {
    let obb = new Object()
    let copy = obj1

    if (Object.entries(obj1).length < Object.entries(obj2).length) {
        copy = obj2
    }
    for (let item in copy) {

        if (obj1[item] !== undefined && obj2[item] !== undefined) {
            if (typeof obj1[item] !== typeof obj2[item] ) {
                obb[item] = obj2[item]
                continue
            }

            if (typeof obj1[item] === "string" && typeof obj2[item] === "string") {
                obb[item] = obj1[item] + " " + obj2[item]
            } else if (typeof obj1[item] === "number" && typeof obj2[item] === "number") {
                obb[item] = obj1[item] + obj2[item]
            } else if (Array.isArray(obj1[item]) && Array.isArray(obj2[item])) {
                obb[item] = [...obj1[item], ...obj2[item]]


            } else  {
                obb[item] = fusion(obj1[item], obj2[item])
            }

        } else {


            if (obj1[item] !== undefined) {
                obb[item] = obj1[item]
            }
            if (obj2[item] !== undefined) {
                obb[item] = obj2[item]
            }
        }

    }
    return obb
    //  obb

}




