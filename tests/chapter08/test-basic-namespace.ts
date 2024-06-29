import {A, B} from "@/chapter08/basic-namespace"

describe("#chapter08", () => {
    it("namespace", () => {
        let a = new A.Class()
        a.run()

        let b = new B.Class()
        b.run()
    })
})