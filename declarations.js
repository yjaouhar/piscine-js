const escapeStr = '\`\\\/\"\'';
const arr =[4,'2'];
const obj = {
    str : 'hello' ,
    num : 10 ,
    bool : true ,
    undef : undefined
}
const nested = {
    arr,
    obj :{
        str: obj.str,
        num : obj.num,
        bool : obj.bool
    }
}

Object.freeze(obj);
Object.freeze(arr);
Object.freeze(nested)
