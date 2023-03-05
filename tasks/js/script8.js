function createRandomNumArray(qntWinNum) {
    const startVal = -500, endVal = 500
    let randomNumArr = []
    for (let i = 0; i < qntWinNum; i++) {
        let randonNum = startVal + Math.floor(Math.random() * (endVal - startVal + 1))
        randomNumArr.push(randonNum)
    }
    return randomNumArr
}

function getResultGame(randomNumArr) {
    let sumUserPoints = 0

    for (let i = 0; i < randomNumArr.length; i++) {
        let userChoice = confirm('Будете играть?')
        if (userChoice === true) {
            let userNum = parseInt(prompt('Введите номер элемента:'))
            if (userNum === i) {
                sumUserPoints += randomNumArr[i]
                alert(`Кол-во баллов = ${sumUserPoints}`)
            }
        } else {
            alert('Жаль! Возращайтесь ещё')
            break
        }
    }
    return `Сумма баллов = <span>${sumUserPoints}</span>`
}

const qntWinNum = parseInt(prompt('Введите количество выигрышных чисел в заданном интервале:'))
const randomNumArr = createRandomNumArray(qntWinNum)
console.log(randomNumArr) // для проверки

result1.innerHTML = getResultGame(randomNumArr)
