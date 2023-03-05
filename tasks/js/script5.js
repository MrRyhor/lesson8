function createArray(k) {
    let arr = []
    for (let i = 0; i < k; i++) {
        let studentScore = parseInt(prompt(`Введите оценку предмета ${i + 1}:`))
        arr.push(studentScore)
    }
    return arr
}

function getQntScoreEquals2(studentScoreList) {
    let sumScoreEquals2 = 0
    for (let i = 0; i < studentScoreList.length; i++) {
        if (studentScoreList[i] === 2) sumScoreEquals2++
    }
    return sumScoreEquals2
}

function getQntScoresEquals4And5(studentScoreList) {
    let sumScoresEquals4 = 0,
        sumScoresEquals5 = 0
    for (let i = 0; i < studentScoreList.length; i++) {
        if (studentScoreList[i] === 4) sumScoresEquals4++
        if (studentScoreList[i] === 5) sumScoresEquals5++
    }
    return sumScoresEquals4 + sumScoresEquals5
}

function getScoresLessAverage(studentScoreList) {
    let sumAllScores = 0
    for (let i = 0; i < studentScoreList.length; i++) {
        sumAllScores += studentScoreList[i]
    }
    let averageScore = sumAllScores / k
    let sumScoresLessAverage = 0
    for (let i = 0; i < studentScoreList.length; i++) {
        if (studentScoreList[i] < averageScore) sumScoresLessAverage++
    }
    return sumScoresLessAverage
}

const k = parseInt(prompt('Введите кол-во оценок ученика:'))
const studentScoreList = createArray(k)

result1.innerHTML = `Кол-во двоек: <span>${getQntScoreEquals2(studentScoreList)}</span><br> Кол-во 4 и 5: <span>${getQntScoresEquals4And5(studentScoreList)}</span><br> Кол-во оценок < average score: <span>${getScoresLessAverage(studentScoreList)}</span>`