//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
//https://www.youtube.com/watch?v=jM0WcyQWMSM

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hello my name is ${this.name}`)
    }
}

const person1 = new Person('Bruce', 44)
// person1.hello()
// console.log(person1)

class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age)
        this.gpa = gpa
    }

    hello() {
        super.hello()
        console.log(`My gpa is ${this.gpa}`)
    }
}

class Test extends Student {
    constructor(something) {
        super()
        this.something = something
    }

    hello() {
        super.hello()
        console.log(`this is ${this.something}`)
    }
}

const test1 = new Test('testing this')
test1.hello()

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize
    }

    hello() {
        console.log(`My class size is ${this.classSize}`)
    }
}

const student1 = new Student('Stephanie', 22, 3.0)
const student2 = new Student('Toby', 4, 2.0)
// console.log(student1)
// console.log(student2)
// student1.hello()

const teacher1 = new Teacher('Tyler', 55, 10)
// console.log(teacher1)
// teacher1.hello()