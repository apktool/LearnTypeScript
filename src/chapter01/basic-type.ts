export function func1() {
    console.log("----------string-----------")

    let a: string = "hello world"
    console.log(a)

    console.log("----------boolean-----------")

    let b: boolean = true
    console.log(b)

    console.log("----------number-----------")

    let c: number = 1.2
    console.log(c)

    c = 1
    console.log(c)

    console.log("----------array-----------")

    let d: string[] = ["a", "b"]
    console.log(d)

    let e: Array<number> = [1, 2, 3, 5, 6]
    console.log(e)

    console.log("----------map-----------")

    let f: Record<string, string> = {"key1": "value1", "key2": "value2"}
    console.log(f)

    console.log("----------tuple-----------")

    let g: [string, number, boolean] = ["ts", 3.14, true]
    console.log(g)

}
