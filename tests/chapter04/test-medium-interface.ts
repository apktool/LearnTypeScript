import {Engineer, Programmer} from "@/chapter04/medium-interface";

describe("#chapter04", () => {
    it("extend-or-implements", () => {
        let p: Programmer = new Programmer();
        p.eat()
        p.work()
    })
    it("extend-and-implements", () => {
        let q: Engineer = new Engineer()
        q.eat()
        q.work()
    })
})