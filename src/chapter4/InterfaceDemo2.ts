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

console.log("----------------------")

/**
 * 可索引接口
 */

// 对数组的约束
interface UserArr {
    [index: number]: string
}

let arr1: UserArr = ["aaa", "bbb"]
console.log(arr1[0])

// 对数组的约束
interface UserObj {
    [index: string]: string
}

let arr2: UserObj = {
    name: "li"
}
console.log(arr2["name"])

