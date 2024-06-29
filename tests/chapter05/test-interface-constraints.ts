import {CourseType, getCourse, getName, NameType, setCourse, setName} from "@/chapter05/interface-constraint";

describe("#chapter05", () => {
    it("interface1", () => {
        setName({firstName: "li", secondName: "apktool"});

        let name: NameType = getName();
        console.log(name)
    })
    it("interface2", () => {
        const func1 = (name: string, score: number) => `${name}: ${score}`
        const res1 = setCourse(func1);
        console.log(res1)

        const func2: CourseType = getCourse()
        const res2 = func2("li", 28);
        console.log(res2)
    })
})