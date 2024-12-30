function firstDayWeek(wek, year) {
    let day = ""
    let month = ""
    let date = new Date('01-01-0001')
    date.setFullYear(year)
    date.setDate((wek * 7) - 6)
    while (date.getDay() !== 1 && date.getDate() !== 1) {
        date.setDate(date.getDate() - 1)
    }
    date.getDate() < 10 ? day = "0" + date.getDate() : day = date.getDate()
    date.getMonth() + 1 < 10 ? month = "0" + (date.getMonth() + 1) : month = (date.getMonth() + 1)

    return day + "-" + month + "-" + year

}


