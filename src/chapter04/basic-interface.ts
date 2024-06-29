export interface AnimalInterface {
    eat(): void;
}

export class Dog implements AnimalInterface {
    eat(): void {
        console.log("dog eat meat")
    }
}