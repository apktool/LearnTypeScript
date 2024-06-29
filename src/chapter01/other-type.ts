export function func2() {
    console.log("----------enum-----------")

    enum color { red, blue, yellow }

    console.log(color.blue)

    console.log("----------any-----------")

    let a: any = 1
    console.log(a)

    a = "hello world"
    console.log(a)

    console.log("----------undefined-----------")

    let b: undefined
    console.log(b)

    let c: number | undefined
    console.log(c)

    c = 1
    console.log(c)

    console.log("----------null-----------")

    let d: null = null
    console.log(d)

    console.log("----------void-----------")

    function f1(): void {
        console.log("hello world")
    }

    f1()
}
