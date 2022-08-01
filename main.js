//first
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = salaries.John + salaries.Ann + salaries.Pete
console.log(sum)

//second
let a = {
name:'Ivan',
age: 26
}
console.log(a.name)

//third
let b = {
name:'Ivan',
age: 26
}
console.log(b.age + 5)

//fourth
let c = {
name:'Ivan',
age: 26,
student: true
}

c.student = false
console.log(c.student)

//fifth
let d = {
name: 'ABRACADABRA',
age: 15,
student: true
}

console.log(d.name.includes('BRAC'))

//sixth


let f = {
name:'Ivan',
age: 26,
student: true
}

console.log([f])
console.log(Object.keys(f))
console.log(Object.values(f))
console.log(Object.entries(f))


//seventh
let g = {
name:'Ivan',
age: 26,
student: true
}
let g2 = {year: 'third', ...g}

console.log(g)
console.log(g2)

//eight
cars = ['bmw', 'honda','mers','lexus']
delete cars[3]
console.log(cars)

//ninth
cars1 = ['bmw', 'honda','mers','lexus']
console.log(cars1[cars1.length -1])

//tenth
cars2 = ['bmw', 'honda','mers','lexus']
cars2[1] = 'toyota'
console.log(cars2)

//eleventh
cars3 = ['bmw', 'honda','mers','lexus']
cars3[4] = 'kia'
console.log(cars3)

//or
cars4 = ['', 'bmw', 'honda','mers','lexus']
cars4[0] = 'kia'
console.log(cars4)


//twelfth
cars5 = ['bmw', 'honda','mers','lexus']
console.log(cars5.length)



























