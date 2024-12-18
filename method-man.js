function words(str){
return str.split(" ")
};
function sentence(arr){
return arr.join(" ")
};

function yell(str){
return str.toUpperCase()
};
function whisper(str){
    return '*'+str.toLowerCase()+'*'
};
function capitalize(str){
    str=str.toLowerCase()
   let  cap=str[0].toUpperCase();
   
return cap+str.slice(1)
};

