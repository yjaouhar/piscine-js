const nutritionDB = {
    tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
    vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
    oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
    onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
    garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
    sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
    orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
}
function filterEntries(obj, func) {
    let ob = {}
    for (let i in obj) {
        if (func([i, obj[i]])) {
            ob[i] = obj[i]
        }
    }
    return ob
}
function mapEntries(obj, func) {
    let sl = []
    for (let i in obj) {
        sl.push(func([i, obj[i]]))
    }
    return Object.fromEntries(sl)
}

function reduceEntries(obj, func, acc) {
    for (let i in obj) {
        acc = (func(acc, [i, obj[i]]))
    }
    return acc

}
function totalCalories(obj) {
    return reduceEntries(obj, (acc, [k, v]) => acc / v + v, )
}

let groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 }
reduceEntries(groceriesCart1, ((acc, [k, v]) => acc + k + v), '')