import { colors } from "./fifty-shades-of-cold.data.js";
function generateClasses() {
    let head = document.head
    let style = document.createElement("style")
    let background = ""
    for (let i = 0; i < colors.length; i++) {
        background += `.${colors[i]}{
           background: ${colors[i]};
        }`
    }

    style.textContent = background
    head.appendChild(style)
}

function generateColdShades() {
    let arr = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (colors[i].includes(arr[j])) {
                let div = document.createElement("div")
                div.setAttribute("class", colors[i])
                div.textContent = colors[i]
                document.body.appendChild(div)
            }
        }
    }
}

function choseShade(shade) {
    let div = document.querySelectorAll("div")
    for (let i = 0; i < div.length; i++) {
        div[i].setAttribute("class", shade)
    }
}

export { generateClasses, generateColdShades, choseShade }