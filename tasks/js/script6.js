function getItemsThatEnoughMoney(itemPrices, itemNames) {
    let resultItemNames = ' '
    for (let i = 0; i < itemPrices.length; i++) {
        if (userMoney >= itemPrices[i]) resultItemNames += `<br> Item Nr. ${i + 1}: <span>${itemNames[i]} = ${itemPrices[i]}</span>`
        else {
            alert(`Not enough money for item ${i + 1}`)
            continue
        }
    }
    return resultItemNames
}

const itemPrices = [20, 30, 35, 15, 21]
const itemNames = ['tomato', 'lemon', 'apple', 'potato', 'corn']

const userMoney = parseFloat(prompt('Enter sum of your money:'))

result1.innerHTML = `List of items you can buy: ${getItemsThatEnoughMoney(itemPrices, itemNames)}`

