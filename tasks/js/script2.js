// создаем массив
function createArray(daysOfWeek) {
    let arr = []
    for (let i = 1; i <= daysOfWeek; i++) {
        let qntOfKlients = parseInt(prompt(`Введите кол-во клиентов за ${i} день:`))
        arr.push(qntOfKlients)
    }
    return arr
}

function getNumOfDayWhenQntLess_20(totalQntOfKlients) {
    let result = ''
    for (let i = 0; i <= totalQntOfKlients.length; i++) {
        if (totalQntOfKlients[i] < 20) {
            result += `День № <span>${i + 1}</span><br>`
        }
    }
    return result
}

function getMinOfKlients(totalQntOfKlients) {
    let result = ''
    for (let i = 0; i < totalQntOfKlients.length; i++) {
        let min = totalQntOfKlients[0]
        if (totalQntOfKlients[1] < min) min = totalQntOfKlients[1]
        if (totalQntOfKlients[2] < min) min = totalQntOfKlients[2]
        if (totalQntOfKlients[3] < min) min = totalQntOfKlients[3]
        if (totalQntOfKlients[4] < min) min = totalQntOfKlients[4]
        if (totalQntOfKlients[5] < min) min = totalQntOfKlients[5]
        if (totalQntOfKlients[6] < min) min = totalQntOfKlients[6]
        if (totalQntOfKlients[7] < min) min = totalQntOfKlients[7]
        if (totalQntOfKlients[i] === min) result += `День № <span>${i + 1}</span>`
    }
    return result
}
function getMaxOfKlients(totalQntOfKlients) {
    let result = ''
    for (let i = 0; i < totalQntOfKlients.length; i++) {
        let max = totalQntOfKlients[0]
        if (totalQntOfKlients[1] > max) max = totalQntOfKlients[1]
        if (totalQntOfKlients[2] > max) max = totalQntOfKlients[2]
        if (totalQntOfKlients[3] > max) max = totalQntOfKlients[3]
        if (totalQntOfKlients[4] > max) max = totalQntOfKlients[4]
        if (totalQntOfKlients[5] > max) max = totalQntOfKlients[5]
        if (totalQntOfKlients[6] > max) max = totalQntOfKlients[6]
        if (totalQntOfKlients[7] > max) max = totalQntOfKlients[7]
        if (totalQntOfKlients[i] === max) result += `День № <span>${i + 1}</span>`
    }
    return result
}

function getQntKlientsWorkingdDays(totalQntOfKlients) {
    let sumKlientsWorkingDays = 0
    for (let i = 0; i < totalQntOfKlients.length; i++) {
        if (i >= 0 && i <= 4) sumKlientsWorkingDays += totalQntOfKlients[i]
    }
    return sumKlientsWorkingDays
}

function getKlientsOfWeekendDays(totalQntOfKlients) {
    let sumKilientsWeekendDays = 0
    for (let i = 0; i < totalQntOfKlients.length; i++) {
        if (i >= 5 && i <= 6) sumKilientsWeekendDays += totalQntOfKlients[i]
    }
    return sumKilientsWeekendDays
}

const daysOfWeek = 7
const totalQntOfKlients = createArray(daysOfWeek)

result1.innerHTML = `Клиентов <20:${getNumOfDayWhenQntLess_20(totalQntOfKlients)}<br> Клиентов min: ${getMinOfKlients(totalQntOfKlients)}<br> Клиентов max: ${getMaxOfKlients(totalQntOfKlients)} <br> Сумма клиентов за working days: <span>${getQntKlientsWorkingdDays(totalQntOfKlients)}</span><br> Сумма клиентов за weekend days: <span>${getKlientsOfWeekendDays(totalQntOfKlients)}</span>`