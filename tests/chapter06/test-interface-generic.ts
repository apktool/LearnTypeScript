import {ConfigFn2, getData1, getData2} from "@/chapter06/interface-generic";

describe("#chapter06", () => {
    it("interface1", () => {

        let res1 = getData1<string>("hello world")
        console.log(res1)

        let res2 = getData1<number>(123)
        console.log(res2)
    })
    it("interface2", () => {
        let func1: ConfigFn2<string> = getData2
        let res1 = func1("hello python")
        console.log(res1)

        let func2: ConfigFn2<number> = getData2
        let res2 = func2(123)
        console.log(res2)
    })
})