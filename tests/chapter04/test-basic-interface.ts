import {Dog} from "@/chapter04/basic-interface";


describe("#chapter04", () => {
    it("basic", () => {
        let dog: Dog = new Dog()
        dog.eat()
    })
})