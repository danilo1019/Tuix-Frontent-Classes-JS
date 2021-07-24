

/*const manzana = {
    color: 'verde',
    peso: 10,
    origin: 'colombia'
}

const keys = Object.keys(manzana)

console.log(keys)
const manzana2 = {}
for (let i = 0; i < keys.length; i ++) {
    console.log(keys[i], manzana[keys[i]])
    manzana2[keys[i]] = manzana[keys[i]]
}

console.log(manzana)
console.log(manzana2)*/


/*const Bike = function (params) {
    this.params = params
}

Bike.prototype.getParams = function () {
    return this.params
}


/!*const bike = new Bike()

console.log(bike.getType.apply({ type: 'Fully' }, []))

const fn1 = function () {
    let acum = 0
    for (let i = 0; i < arguments.length; i ++) {
        acum  += arguments[i]
    }

    return acum
}



Function.prototype.new = function () {
    console.log('this.prototype ', this.prototype)
    const that = Object.create(this.prototype)
    const other = this.apply(that, arguments)

    return (typeof other === 'object' && other) || that
}*!/*/


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

const radiation = function (params) {
    const that = mamal(params)

    that.eat = function () {
        console.log('EAT')
    }

    return that
}

const zombie = function (params) {
    let that = human(params)
    let that2 = radiation(params)
    let that3 = {}

    const thatKeys = Object.keys(that)
    const that2Keys = Object.keys(that2)

    for(let i = 0; i < thatKeys.length; i++) {
        that3[thatKeys[i]] = that[thatKeys[i]]
    }

    for(let i = 0; i < that2Keys.length; i++) {
        that3[that2Keys[i]] = that2[that2Keys[i]]
    }

    that3.walking = function () {
        console.log('WALKING')
    }

    return that3

}



const square  = document.getElementById('square')

const position = {
    left: 0,
    top: 0,
}

const moveSquare = (e) => {
    console.log(e)

    switch (e.key) {
        case "a":
            position.left -= 10
            square.style.left = position.left + 'px'
            return
        case "s":
            position.top += 10
            square.style.top = position.top + 'px'
            return
        case "d":
            position.left += 10
            square.style.left = position.left + 'px'
            return
        case "w":
            position.top -= 10
            square.style.top = position.top + 'px'
            return
    }
}


addEventListener('keyup', moveSquare)







