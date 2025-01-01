
function arrToSet(arr){
    return new Set(arr)
};

function arrToStr(arr){
    return arr.join("")
};
function setToArr(set){
return Array.from(set)
};
function setToStr(set){
    const str = setToArr(set);
    return str.join("")
};
function strToArr(str){
    return str.split("")
};
function strToSet(str){
    return new Set(strToArr(str))
};
function mapToObj(map){
return Object.fromEntries(map)
};
function objToArr(obj){
return Object.values(obj)
};
function objToMap(obj){
return new Map(Object.entries(obj))
};
function arrToObj(arr){
    return Object.assign({},arr)
};  
function strToObj(str){
    
return Object.assign({},str)
};
const tt = new Set()


function superTypeOf(typ){
    if (typ===null) {
        return "null"
    }
    if (typ === undefined){
        return "undefined"
    }
    if (typeof typ=="function"){
        return "Function"
    }
    if (Array.isArray(typ)){
        return "Array"
    }
    if (typ instanceof Set){
        return "Set"
    }
    if (typ instanceof Map){
        return "Map"
    }
    let val = (typeof typ)
    return val[0].toUpperCase()+val.slice(1)
};


console.log(objToArr({ f: 5, __proto__: { d: 6 } }), { 5: 'f' });
