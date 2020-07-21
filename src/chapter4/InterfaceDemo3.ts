interface AnimalInterface {
    eat(): void;
}

class Dog implements AnimalInterface {
    eat(): void {
        console.log("dog eat meat")
    }
}

let dog = new Dog()
dog.eat()