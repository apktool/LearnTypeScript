import {Person, Son} from "@/chapter03/basic-class"

describe("#chapter03", () => {
    it("father-class", () => {
        let p = new Person("li", 20)
        console.log(p.name)

        p.name = "wang"
        console.log(p.name + ":" + p.age)

        console.log("----------------------")
    })
    it("son-class", () => {
        let q = new Son("gao", 21, 99)
        console.log(q.name)

        let r = new Son("zhao", 21, 12.3)
        console.log(r.name + ":" + r.age + ":" + r.score)
    })
})