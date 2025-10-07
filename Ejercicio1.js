/*Ejercicio 1*/
let myFavoriteHero = 'Hulk'
let x = 50
let h = 5
let y = 10
let z = h + y
console.log(z)
/*Ejercicio 2.1*/
const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25
console.log(character)
/*Ejercicio 2.2*/
const firstName = 'Jon'
const lastName = 'Snow'
const age = 24
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)
/*Ejercicio 2.3*/
const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }
console.log(toy1.price + toy2.price)
/*Ejercicio 2.4*/
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
globalBasePrice
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice
console.log(car1.finalPrice)
console.log(car2.finalPrice)
console.log(car1)
console.log(car2)
/*Ejercicio 3.1*/
let a = 5
let b = 10
console.log(a * b)
/*Ejercicio 3.2*/
let c = 10
let d = 2
console.log(c / d)
/*Ejercicio 3.3*/
let e = 15
let f = 9
console.log(e % f)
/*Ejercicio 3.4*/
let p = 10
let j = 5
let o = p
o += j
console.log(o)
/*Ejercicio 3.5*/
let k = 10
let m = 5
let i = k
i *= m
console.log(i)
/*Ejercicio 4.1*/
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
/*Ejercicio 4.2*/
avengers[0] = 'IRONMAN'
console.log(avengers)
/*Ejercicio 4.3*/
console.log(avengers.length)
/*Ejercicio 4.4*/
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
/*Ejercicio 4.5*/
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
/*Ejercicio 4.6*/
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)
/*Ejercicio 5*/
const number1 = 10
const number2 = 20
const number3 = 2
if (number2 / number1 === 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}
if (number3 != number1) {
  console.log('number3 es distinto number1')
}
/*Ejercicio 6.1*/
for (let i = 0; i <= 9; i++) {
  console.log(i)
}
/*Ejercicio 6.2*/
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
/*Ejercicio 6.3*/
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log('Dormido!')
  } else {
    console.log('Intentando dormir 🐑')
  }
} /*Ejercicio 7*/
function getMaxNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    return numberTwo
  }
}
/*Ejercicio 8*/
const avengers1 = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let longestWord = avengers1[0] // asumimos que la primera es la más larga al inicio
  for (let i = 1; i < avengers1.length; i++) {
    if (avengers[i].length > longestWord.length) {
      longestWord = param[i]
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers1))
/*Ejercicio 9*/
const numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(param) {
  let total = 0
  for (let i = 0; i < param.length; i++) {
    total += param[i]
  }
  return total
}
console.log(sumAll(numbers))
/*Ejercicio 10*/
function average(param) {
  let total = 0
  for (let i = 0; i < param.length; i++) {
    total += param[i]
  }
  return total / param.length
}
const numbers1 = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers1))
/*Ejercicio 11*/
function averageWord(param) {
  let total = 0
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      total += param[i] // sumamos el número
    } else if (typeof param[i] === 'string') {
      total += param[i].length // sumamos la longitud del string
    }
  }
  return total / param.length // promedio total
}
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(averageWord(mixedElements));
