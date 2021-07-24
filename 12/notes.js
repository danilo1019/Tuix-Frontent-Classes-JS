// Objects
// Object literal
const user = {
    firstName: 'Juan',
    lastName: 'Vizcaino',
    address: {
        street: 'Dennerstrasse',
        number: '62',
        postalCode: 70372,
        city: 'Stuttgart'
    },
    products: ['mango', 'lulo', 'mandarina']
}

const firstName = user.firstName
// firstName = user['firstName']
const mandarina = user.products[2]
// firstName = user['products'][2]

// explain that object are not copied....
const juan = user

juan.lastName = 'Lopez'

console.log('user', user)

// only prototype is copied
const copyOfJuan = Object.create(user)

copyOfJuan.lastName = 'Castro'

console.log('copyOfJuan', copyOfJuan)

delete copyOfJuan.lastName

console.log('copyOfJuan2', copyOfJuan)


//////// End Objects


// Prototype
console.log(String.prototype)

String.prototype.addQuestionMark = function () {
    return this.valueOf() + '?'
}
// End Prototype

// Functions

// apply
const Bike = function () {
    this.type = 'Hard tail'
}

Bike.prototype.getType = function () {
    return this.type
}

const bike = new Bike()

console.log('bike.getType() ', bike.getType())

const context = {type: 'Fully'}

console.log(bike.getType.apply(context, []))



// Pseudoclassical inheritance
// How the new keywork works:
Function.prototype.new = function () {
    console.log('this.prototype ', this.prototype)
    const that = Object.create(this.prototype)
    const other = this.apply(that, arguments)

    return (typeof other === 'object' && other) || that
}

const Animal = function (params) {
    this.name  = params.name
    this.age  = params.age
}

Animal.prototype.getName = function () {
    return this.name
}

const animal1 = Animal.new({name: 'Dog', age: 10})

console.log('animal1:', animal1)


// prototypal inheritance

const animal = function (params) {
    const that = {};

    that.getName = function () {
        return params.name
    }

    return that
}


const myDog = animal({name: 'dog', age: 10})

const mamal = function (params) {
    const that = animal(params)

    that.getName = function () {
        return params.name + 'XXX'
    }

    that.getAge = function () {
        return params.age
    }

    return that
}

const human = function (params) {
    const that = mamal(params)

    that.speak = function () {
        console.log('HOLA')
    }

    return that
}

// END: prototypal inheritance //



