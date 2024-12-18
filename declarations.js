const escapeStr = '\`\\\/\"\'';
const arr =[4,'2'];
Object.freeze(arr);
const obj = {
    str : 'hello' ,
    num : 10 ,
    bool : true ,
    undef : undefined
}
Object.freeze(obj);

const nested = {
    arr :[4,undefined,'2'],
    obj :{
        str: obj.str,
        num : obj.num,
        bool : obj.bool
    }
}

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)


console.log(nested.arr)