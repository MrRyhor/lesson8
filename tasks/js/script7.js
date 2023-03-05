function getSumOfYear(listOfPayment) {
    let sumOfPayment = 0
    for (let i = 0; i < listOfPayment.length; i++) {
        sumOfPayment += listOfPayment[i]
    }
    return sumOfPayment
}

function getSumFirstHalfYear(listOfPayment) {
    let sumFirstHalfYear = 0
    for (let i = 0; i < listOfPayment.length; i++) {
        if (i <= listOfPayment.length / 2) sumFirstHalfYear += listOfPayment[i]
    }
    return sumFirstHalfYear
}

function getSumSecondHalfYear(listOfPayment) {
    let sumSecondHalfYear = 0
    for (let i = 0; i < listOfPayment.length; i++) {
        if (i > listOfPayment.length / 2) sumSecondHalfYear += listOfPayment[i]
    }
    return sumSecondHalfYear
}

function getSumSummer(listOfPayment) {
    let sumSummer = 0
    for (let i = 0; i < listOfPayment.length; i++) {
        if (i >= 5 && i <= 7) sumSummer += listOfPayment[i]
    }
    return sumSummer
}

function getSumSecondQuarter(listOfPayment) {
    let sumSecondQuarter = 0
    for (let i = 0; i < listOfPayment.length; i++) {
        if (i >= 3 && i <= 5) sumSecondQuarter += listOfPayment[i]
    }
    return sumSecondQuarter
}

function getSumEvenMonth(listOfPayment) {
    let sumEvenMonth = 0
    for (let i = 0; i < listOfPayment.length; i++) {
        if (i % 2 === 0) sumEvenMonth += listOfPayment[i]
    }
    return sumEvenMonth
}

function getSumMonthStartSeason(listOfPayment) {
    let sumMonthStartSeason = 0
    for (let i = 2; i < listOfPayment.length; i += 3) {
        sumMonthStartSeason += listOfPayment[i]
    }
    return sumMonthStartSeason
}


const listOfPayment = [56, 23, 12, 23, 45, 34, 54, 65, 45, 43, 32, 28]

document.write(`<p>1) Сумма за 365 дней: <span>${getSumOfYear(listOfPayment)}</span></p>`)
document.write(`<p>2) Сумма за 1-ое полугодье: <span>${getSumFirstHalfYear(listOfPayment)}</span></p>`)
document.write(`<p>3) Сумма за 2-ое полугодье: <span>${getSumSecondHalfYear(listOfPayment)}</span></p>`)
document.write(`<p>4) Сумма за лето: <span>${getSumSummer(listOfPayment)}</span></p>`)
document.write(`<p>5) Сумма за 2-ой квартал: <span>${getSumSecondQuarter(listOfPayment)}</span></p>`)
document.write(`<p>6) Сумма за парные месяцы: <span>${getSumEvenMonth(listOfPayment)}</span></p>`)
document.write(`<p>7) Сумма за стартовые месяцы сезонов: <span>${getSumMonthStartSeason(listOfPayment)}</span></p>`)


