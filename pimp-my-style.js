import { styles } from "./pimp-my-style.data.js"
var count = 0
export function pimp() {
    let botton = document.querySelector("button")

    if (botton.classList.contains("unpimp")) {
        if (count === 0) {
            botton.classList.toggle("unpimp")
            botton.classList.remove(styles[count])

        } else {
            botton.classList.remove(styles[count])
            count--
        }
    } else {
        if (count === styles.length - 1) {
            botton.classList.add(styles[count])
            botton.classList.add("unpimp")
        } else {
            botton.classList.add(styles[count])
            count++
        }
    }
}