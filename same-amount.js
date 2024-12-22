function sameAmount(srt, reg1, reg2) {
    let newrg1 = new RegExp(reg1, "g");
    let newrg2 = new RegExp(reg2, "g");
    let arr1 = srt.match(newrg1);
    let arr2 = srt.match(newrg2);
    if ((arr1 === null || arr2 === null) || (arr1.length !== arr2.length)) {
        return false
    }
    return true;
}

