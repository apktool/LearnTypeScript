/**
 * abstract
 */

abstract class Animal {
    public abstract eat(): any;

    public play(): void {
        console.log("playing")
    }
}

class Dog extends Animal {
    public eat(): any {
        console.log("eat meat")
    }
}

let doge: Animal = new Dog()
doge.eat()
doge.play()
