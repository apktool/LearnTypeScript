export namespace A {
    interface Interface {
        run(): void
    }

    export class Class implements Interface {
        run(): void {
            console.log("hello world")
        }
    }
}

export namespace B {
    interface Interface {
        run(): void
    }

    export class Class implements Interface {
        run(): void {
            console.log("hello script")
        }
    }
}

