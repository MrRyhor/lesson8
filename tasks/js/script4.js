function createArray(k) {
    let arr = []
    for (let i = 0; i < k; i++) {
        let carNum = prompt(`Введите номер авто ${i + 1} (8 символов без пробела):`)
        arr.push(carNum)
    }
    return arr
}

function isCarNumStartFromA(carNumList) {
    let sumQntNumStartA = 0
    for (let i = 0; i < carNumList.length; i++) {
        if (carNumList[i][0] === 'A') sumQntNumStartA++
    }
    return sumQntNumStartA
}

function isFirstAndLastSymbolEquals(carNumList) {
    let sumFirstAndLastSymbol = 0
    for (let i = 0; i < carNumList.length; i++) {
        if (carNumList[i][0] === carNumList[i][carNumList[i].length - 1])
            sumFirstAndLastSymbol++
    }
    return sumFirstAndLastSymbol
}

function isCarNumMoreThan5Symbol(carNumList) {
    let sumNumMoreThan5Symbol = 0
    for (let i = 0; i < carNumList.length; i++) {
        if (carNumList[i].length > 5) sumNumMoreThan5Symbol++
    }
    return sumNumMoreThan5Symbol
}

const k = parseInt(prompt('Введите кол-во номеров авто:'))
const carNumList = createArray(k)

console.log(carNumList) // для проверки


result1.innerHTML = `Кол-во номеров на "А": <span>${isCarNumStartFromA(carNumList)}</span><br> Кол-во номеров first = last: <span>${isFirstAndLastSymbolEquals(carNumList)}</span><br> Кол-во номеров >5 symbols: <span>${isCarNumMoreThan5Symbol(carNumList)}</span>`