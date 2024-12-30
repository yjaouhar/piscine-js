function generateLetters() {

    for (let i = 0; i < 120; i++) {
        const div = document.createElement("div")
        const alph = document.createTextNode(alphat())
        div.appendChild(alph)
        div.style.fontSize = i + 11 + "px"
        let weight = 600
        if (i < 40) {
            weight = 300
        } else if (i >= 40 && i < 80) {
            weight = 400
        } 
         div.style.fontWeight =weight
        document.body.appendChild(div)

    }
}

export { generateLetters }

function alphat() {
    let alph = "ABCDEFJHIGKLMNOPQRSTUVWXYZ"

    return alph[Math.floor(Math.random() * 26)]
}