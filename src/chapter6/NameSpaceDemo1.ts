namespace A {
    interface Interface {
        run(): void
    }

    export class Class implements Interface {
        run(): void {
            console.log("hello world")
        }
    }
}

namespace B {
    interface Interface {
        run(): void
    }

    export class Class implements Interface {
        run(): void {
            console.log("hello script")
        }
    }
}

let a = new A.Class()
a.run()

let b = new B.Class()
b.run()