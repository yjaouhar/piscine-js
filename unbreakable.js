function join(arr, sep) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {

        if (typeof sep === "undefined") {
            let sep = ","
            if (i !== arr.length - 1) {
                str += arr[i] + sep
            } else {
                str += arr[i]
            }

        } else {
            if (i !== arr.length - 1) {
                str += arr[i] + sep
            } else {
                str += arr[i]
            }
        }

    }

    return str
};

function split(str, sep) {
    let arr = []
    let sl = ""
    if (typeof sep === "undefined") {
        arr.push(str)
    } else {
        for (let i = 0; i < str.length; i++) {
            if (sep === "") {
                if (str[i] !== " ") {
                    arr.push(str[i])
                }
            } else {
                if ((str.slice(i, i + sep.length) === sep)) {
                    arr.push(sl)
                    sl = ""
                    i +=sep.length-1
                } else {
                    sl += str[i]
                }
               if  (i===str.length-1){
                arr.push(sl)
               }
               
            }
        }
        if (arr.length===0){
            arr.push("")
        }

    }
    return arr
};


