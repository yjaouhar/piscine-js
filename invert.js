function invert(obj) {
    let nob = Object.entries(obj).map((e) => [e[1], e[0]])
    return Object.fromEntries(nob)
}
