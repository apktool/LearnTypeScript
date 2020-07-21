interface ConfigFn1 {
    <T>(value: T): T
}

let getData1: ConfigFn1 = function <T>(value: T): T {
    return value
}

let res1 = getData1<string>("hello world")
console.log(res1)

let res2 = getData1<number>(123)
console.log(res2)

console.log("----------------------")

interface ConfigFn2<T> {
    (value: T): T
}

function getData<T>(value: T): T {
    return value
}

let getData2: ConfigFn2<string> = getData
let res3 = getData2("hello python")
console.log(res3)

let getData3: ConfigFn2<number> = getData
let res4 = getData3(123)
console.log(res4)

