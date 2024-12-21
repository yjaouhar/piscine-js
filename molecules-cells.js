function RNA(str) {
    let s = ""
    const rnamp= new Map()
    rnamp.set("T","A")
    rnamp.set("A","U")
    rnamp.set("G","C")
    rnamp.set("C","G")
for (let i = 0; i < str.length; i++) {
   s+=rnamp.get(str[i])
}
return s
};

function DNA(str) {
    let s = ""
    const dnamp= new Map()
    dnamp.set("A","T")
    dnamp.set("U","A")
    dnamp.set("C","G")
    dnamp.set("G","C")
for (let i = 0; i < str.length; i++) {
   s+=dnamp.get(str[i])
}
return s

};


