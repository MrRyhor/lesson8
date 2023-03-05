// создаем массив с нулями
function createArr(batleFieldLength) {
    let arr = []
    for (let i = 0; i < batleFieldLength; i++) {
        arr.push(0)
    }
    return arr
}
// функция для нахождения ранд. позиции
function getRandomShipPosition() {
    const startVal = 0, endVal = batleFieldLength - 1
    let randomShipPosition = startVal + Math.floor(Math.random() * (endVal - startVal + 1))
    return randomShipPosition
}

// исходя из кол-ва qntShip заполняем рандомные эл-ты массива на 1
function fillArrWithShipPosition(qntShip) {
    for (let i = 0; i < qntShip; i++) {
        let shipPosition = getRandomShipPosition()
        if (batleField[shipPosition] === 0) batleField[shipPosition] = 1
        else i--
    }
    return batleField
}

// стреляем по кораблям
function getResultGame(batleField) {
    let result = 0
    for (let i = 0; i < batleField.length; i++) {
        if (qntShip === 0) break
        let userShoot = parseInt(prompt(`Попытка № ${i + 1}. Введите номер клетки, где может быть корабль:`))
        if (batleField[userShoot] === 1) {
            qntShip--
            alert(`Вы потопили корабль. Осталось ${qntShip} кораблей`)
            result++
        }
        else
            alert('Мимо :( Стреляйте ещё')
    }
    return result
}

const batleFieldLength = parseInt(prompt('Введите количество клеток:'))
let batleField = createArr(batleFieldLength)
console.log(batleField) // для проверки

let qntShip = parseInt(prompt('Введите кол-во кораблей:'))

batleField = fillArrWithShipPosition(qntShip)
console.log(batleField) // для проверки

result1.innerHTML = `Потоплено кораблей = <span>${getResultGame(batleField)}</span>`



