import {f1} from "@/chapter06/func-generic";

describe("#chapter06", () => {
    it("function", () => {
        let a = f1<number>(123)
        console.log(a)

        let b = f1<string>("abc")
        console.log(b)
    })
})