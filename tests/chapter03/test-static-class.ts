import {Person} from "@/chapter03/static-class"

describe("#chapter03", () => {
    it("static-method/attribute", () => {
        let person = new Person("zhang")
        person.work()
        Person.play()
    })

})