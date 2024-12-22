 const vowels = /[aeiou]/gi
function vowelDots(str) {
    let st = ""
    for (let i = 0; i < str.length; i++) {
        st+=str[i]
        if (str[i].match(vowels)){
            st+="."
        }        
    }
    return st
}
let rg = /s/;
let text = "somsethsing";
let arr=text.match(rg)
console.log(arr);
