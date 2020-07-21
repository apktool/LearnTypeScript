/**
 * 属性接口
 */

function printLabel(label: string): void {
    console.log(label)
}

printLabel("label")

function printTag(tag: { "id": string }): void {
    console.log(tag)
}

printTag({"id": "1"})

let tag = {
    "id": "1",
    "name": "apk"
}

printTag(tag)

console.log("-------------------")

/**
 * 接口约束
 */
interface FullName {
    firstName: string
    secondName: string
    sex?: string
}

function printName(name: FullName): void {
    console.log(name.firstName + ":" + name.secondName)
}

let obj = {
    age: 20,
    firstName: "li",
    secondName: "shui"
}

printName(obj)

console.log("-------------------")

/**
 * 函数接口
 */
interface encrypt {
    (key: string, value: string): string
}

let md5: encrypt = function (key: string, value: string): string {
    return key + ":" + value
}

let res1 = md5("name", "apktool")
console.log(res1)

/**
 *
 */
