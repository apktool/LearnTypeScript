import {setName1, setName2} from "@/chapter05/basic-constraints";

describe("#chapter05", () => {
    it("basic", () => {
        setName1("li", "apktool");
        setName2({firstName: "li", secondName: "apktool"});
    })
})