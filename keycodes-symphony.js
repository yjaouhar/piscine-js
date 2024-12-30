function compose() {
    document.body.addEventListener("keydown", logKey);
    
}
function logKey(e) {
    let div = document.createElement("div")
    div.setAttribute("class", "note")
    let letter = (e.key).toLowerCase()
    div.textContent = letter
    div.style.background = getRandomColor()
    if (letter === "escape") {
        let div = document.querySelectorAll("div")
        for (let i = 0; i < div.length; i++) {
            div[i].remove()
        }
    } else if (letter === "backspace") {
        let div = document.querySelectorAll("div")
        div[div.length - 1].remove()
    } else {
        document.body.appendChild(div)
    }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export { compose }