/**
 * abstract
 */

export abstract class Animal {
    public abstract eat(): void;

    public play(): void {
        console.log("playing")
    }
}

export class Dog extends Animal {
    public eat(): void {
        console.log("eat meat")
    }
}