import {Animal, Dog} from "@/chapter03/abstract-class"

describe("#chapter03", () => {
    it("abstract", () => {
        let doge: Animal = new Dog()
        doge.eat()
        doge.play()
    })
})