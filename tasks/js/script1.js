
//  создаем массив с оценками по К предметам
function createArray(k) {
    let arr = []
    for (let i = 1; i <= k; i++) {
        const score = parseInt(prompt(`Введите оценку по ${i} предмету`))
        arr.push(score)
    }
    return arr
}
// находим среднюю оценку
function getAverageScore(scoresList) {
    let sumScores = 0

    for (let i = 0; i < scoresList.length; i++) {
        sumScores += scoresList[i]
        console.log(sumScores)
    }
    return sumScores / k
}
// находим минимальную оценку
function getMinScore(scoresList) {
    let minScore = scoresList[0]
    for (let i = 1; i <= scoresList.length; i++) {
        if (scoresList[i] < minScore) minScore = scoresList[i]
    }
    return minScore
}

// узнаем статус ученика
function isStudentPerformance(scoresList) {
    let minScore = getMinScore(scoresList)
    let result
    switch (minScore) {
        case 1:
        case 2: result = 'Двоечник'
            break
        case 3: result = 'Троечник'
            break;
        case 4: result = 'Хорошист'
            break;
        default: result = 'Отличник'
            break;
    }
    return result
}

const k = parseInt(prompt('Введите кол-во предметов:'))
const scoresList = createArray(k)
console.log(scoresList)

// выводим рез-т
result1.innerHTML = `Средняя оценка = <span>${getAverageScore(scoresList)}</span><br> Ученик является: <span>${isStudentPerformance(scoresList)}</span>`


