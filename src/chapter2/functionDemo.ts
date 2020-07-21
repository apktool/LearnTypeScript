/**
 * 函数，不带参数
 */
function f1(): string {
    return "string"
}

let res1 = f1()
console.log(res1)

console.log("------------------")

/**
 * 匿名函数，不带参数
 */

let res2 = function (): string {
    return "string"
}
console.log(res2())

console.log("------------------")

/**
 * 函数，带参数
 * @param name
 * @param age
 */

function f2(name: string, age: number): string {
    return `${name}: ${age}`
}

let res3 = f2("li", 20)
console.log(res3)

console.log("------------------")

/**
 * 匿名函数，带参数
 * @param name
 * @param age
 */

let res4 = function (name: string, age: number): string {
    return `${name}: ${age}`
}
console.log(res4("li", 20))

console.log("------------------")

/**
 * 函数，可选参数
 * @param name
 * @param age
 */
function f3(name: string, age?: number): string {
    if (age != null) {
        return `${name}: ${age}`
    } else {
        return `${name}`
    }
}

let res5 = f3("li", 27)
console.log(res5)

let res6 = f3("li")
console.log(res6)

console.log("------------------")

/**
 * 函数，可选参数
 * @param name
 * @param age
 */
function f4(name: string, age: number = 20): string {
    return `${name}: ${age}`
}

let res7 = f4("li", 26)
console.log(res7)

let res8 = f4("li")
console.log(res8)

console.log("------------------")

/**
 * 函数，剩余参数
 * @param list
 */
function f5(a: number, ...list: number[]): number {
    return a + list.reduce((a, b) => a + b)
}

let res9 = f5(0, 1, 2, 3, 4)
console.log(res9)

