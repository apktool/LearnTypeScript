import {getName, type NameType, setName} from "@/chapter05/type-constraint";

describe("#chapter05", () => {
    it("type", () => {
        setName({firstName: "li", secondName: "apktool"});

        let name: NameType = getName();
        console.log(name)
    })
})