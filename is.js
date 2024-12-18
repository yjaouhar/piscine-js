
    is.num= function(number){
        return  typeof number == "number"
    };
    is.nan =function(namber){
        return  Number.isNaN(namber)
    };
    is.str = function(str){
         return  typeof str == "string"
    };
    is.bool = function(arg){
            return typeof arg=="boolean"
    };
    is.undef = function(undef){
            return typeof undef=="undefined"
    };
    is.def = function(def){
            return (typeof def!="undefined" )
    };
    is.arr = function(arr){
            return  Array.isArray(arr)
    };
    is.obj = function(obj){
            return (typeof obj == "object"&&obj!=null &&!is.arr(obj) )
    };
    is.fun = function(fun){
            return typeof fun=="function"
    };
    is.truthy = function(arg){
            return arg?true:false
    };
    is.falsy = function(falsy){
            return !is.truthy(falsy)
    };

