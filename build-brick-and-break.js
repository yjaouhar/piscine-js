export function build(amont) {
    for (let i = 1; i <= amont; i++) {
        const div = document.createElement("div")
        div.id = `brick-${i}`
        if (i % 3 === 2) {
            div.setAttribute("data-foundation", true)
        }
        setTimeout(() => {
            document.body.append(div)
        }, 100 * i)

    }
}

export function repair(...ids) {
    ids.forEach(id => {
        let iid = document.getElementById(id)
        if (iid.getAttribute("data-foundation")) {
            iid.setAttribute("data-repaired", "in progress")
        } else {
            iid.setAttribute("data-repaired", true)
        }
    })

}


export function destroy() {
    let div = document.getElementsByTagName("div")
    let lst = div[div.length - 1]
    lst.remove()
}