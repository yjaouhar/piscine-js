function setBox() {
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    document.body.appendChild(box)
    box.addEventListener("mouseleave", () => {
        removeEventListener("mousemove", moveCircle())
   
    })

}
function createCircle() {
    document.body.addEventListener("click", (e) => {
        let div = document.createElement("div")
        div.setAttribute("class", "circle")
        div.style.cssText = `
        top:${e.y - 25}px;
        left : ${e.x - 25}px
        `
        div.style.background = "white"
        document.body.append(div)
    });
}
function moveCircle(rm) {
    addEventListener("mousemove", (e) => {
        let crc = Array.from(document.querySelectorAll(".circle"))
        crc[crc.length - 1].style.cssText = `
          top:${e.y - 25}px;
        left : ${e.x - 25}px
        `
        crc[crc.length - 1].style.background = "white"
    })

}


export { setBox, createCircle, moveCircle }