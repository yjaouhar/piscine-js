export function getArchitects() {
    let sl = [[], []]
    sl[0] = document.querySelectorAll("a")
    sl[1] = document.querySelectorAll("span")
    return sl
}

export function getClassical(arr) {
    let sl = [[], []]
    sl[0] = document.querySelectorAll(".classical")
    sl[1] = document.querySelectorAll("a:not(.classical)")
    return sl
}
export function getActive(arr) {
    let sl = [[], []]
    sl[0] = document.querySelectorAll(".classical.active")
    sl[1] = document.querySelectorAll("a:not(.classical.active)")
    return sl
}

export function getBonannoPisano(arr) {
    let sl = [[], []]
    sl[0] = document.querySelector("#BonannoPisano")
    sl[1] = document.querySelectorAll(".classical.active")
  
    return sl
}


