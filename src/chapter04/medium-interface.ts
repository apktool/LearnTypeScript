interface Animal {
    eat(): void
}

interface Person extends Animal {
    work(): void
}

export class Programmer implements Person {
    eat(): void {
        console.log("eat food")
    }

    work(): void {
        console.log("go to work")
    }
}


export class Engineer extends Programmer implements Person {
    eat(): void {
        console.log("eat apple")
    }
}

