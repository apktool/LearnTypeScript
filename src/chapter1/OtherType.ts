console.log("----------enum-----------")

/*
enum a { red, blue, yello }
console.log(a.blue)
 */

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

let d: null
console.log(d)

d = null
console.log(d)

console.log("----------never-----------")
/**
 * never包括 null 和 undefined，包括 null 和 undefined
 * 表示从不会出现的值，意味着 never 变量只能被 never 类型所赋值
 */

let g: never = (
    () => {
        throw new Error("ERROR")
    }
)()

console.log(g)


console.log("----------void-----------")

function f1(): void {
    console.log("hello world")
}

f1()
