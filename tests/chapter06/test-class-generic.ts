import {ClassDemo} from "@/chapter06/class-generic"

describe("#chapter06", () => {
    it("class", () => {
        let c1 = new ClassDemo<number>()
        c1.add(3)
        c1.add(1)
        c1.add(2)
        console.log(c1.min())

        let c2 = new ClassDemo<string>()
        c2.add("c")
        c2.add("a")
        c2.add("b")
        console.log(c2.min())
    })
})