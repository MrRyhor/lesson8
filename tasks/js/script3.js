// сщздаём массив
function createArray(qntOfStudents) {
    let arr = []
    for (let i = 0; i < qntOfStudents; i++) {
        let nameUser = prompt(`Введите имя ученика ${i + 1}:`)
        arr.push(nameUser)
    }
    return arr
}

function isNameIvan(listOfStudents) {
    let sumIvan = 0
    for (let i = 0; i < listOfStudents.length; i++) {
        if (listOfStudents[i] === 'Ivan') sumIvan++
    }
    return sumIvan
}

const qntOfStudents = parseInt(prompt('Введите кол-во учеников:'))
const listOfStudents = createArray(qntOfStudents)
console.log(listOfStudents)

result1.innerHTML = `Сколько 'Ivan' в классе: <span>${isNameIvan(listOfStudents)}</span>`