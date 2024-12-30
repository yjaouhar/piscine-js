
function isValid(dat) {
  
    
    if ((dat.toString() !== "Invalid Date") && (typeof dat !=="string")&&!(Number.isNaN(dat))) {
        const date = new Date(dat)
        if (date instanceof Date) {
            return true
        }
    }
    return false
}

function isAfter(date1, date2) {
    if (isValid(date1) && isValid(date2)) {
        if (date1 > date2) {
            return true
        }
    }
    return false
}

function isBefore(date1, date2) {
    if (isValid(date1) && isValid(date2)) {
        if (date1 < date2) {
            return true
        }
    }

    return false
}

function isFuture(date) {
    if (isValid(date)) {
        if (new Date() < date) {
            return true
        }

    }
    return false
}

function isPast(date) {
    if (isValid(date)) {
        if (new Date() > date) {
            return true
        }

    }
    return false
}



// console.log(isValid(''));
// console.log(isValid(new Date('')));
// console.log(isValid(new Date(NaN)));
// console.log(isValid('2013-01-01'));
// console.log(isValid(NaN));
           
    