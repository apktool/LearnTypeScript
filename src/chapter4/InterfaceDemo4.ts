interface Animal {
    eat(): void
}

interface Person extends Animal {
    work(): void
}

class Programmer implements Person {
    eat(): void {
        console.log("eat food")
    }

    work(): void {
        console.log("go to work")
    }
}

let p: Programmer = new Programmer();
p.eat()
p.work()

class Enginer extends Programmer implements Person {
    eat(): void {
        console.log("eat apple")
    }
}

let q: Enginer = new Enginer()
q.eat()
q.work()