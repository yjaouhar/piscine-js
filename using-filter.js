function filterShortStateName(arr) {
    return arr.filter(key => key.length < 7)
}

function filterStartVowel(arr) {
    return arr.filter(key => chekvowel(key))
}

function filter5Vowels(arr) {
    return arr.filter(key => check5vowel(key))
}

function filter1DistinctVowel(arr) {
    return arr.filter(key => onevowel(key))
}

function multiFilter(arr) {
    return arr.filter(key => (key.capital.length >= 8 && !(chekvowel(key.name)) && onevowel(key.tag) && (key.region.toLowerCase() !== "south")))
}

function chekvowel(str) {
    const reg = /^[aeiou]/gi
    if (str.match(reg)) {
        return true
    }
    return false
}
function check5vowel(str) {
    return str.match(/^(?=(.*[aeiou].*){5})/gi)
}

function onevowel(str) {
    const reg = /[aeiou]/gi
    let sl = []
    str = str.toLowerCase()
    sl = (str.match(reg))
    if (sl === null) {
        return false
    }
    for (let i = 0; i < sl.length; i++) {
        for (let j = i + 1; j < sl.length; j++) {
            if ((sl[i] !== sl[j])) {
                return false
            }
        }
    }
    return true
}


