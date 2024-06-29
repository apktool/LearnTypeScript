/**
 * https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
 */

export function func3() {
    console.log("-----------arr1------------")
    let arr1: string[] = ["a", "b", "c"]
    for (const item of arr1) {
        console.log(item)
    }

    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
    }

    console.log("-----------arr2------------")
    let arr2: Array<string> = ["a", "b", "c"]
    for (const item of arr2) {
        console.log(item)
    }

    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i])
    }

    console.log("-----------arr3------------")
    let arr3: Array<string> = new Array<string>("a", "b", "c")
    for (const item in arr3) {
        console.log(item)
    }

    for (let i = 0; i < arr3.length; i++) {
        console.log(arr3[i])
    }

    console.log("-----------map1------------")
    let map1: { [key: string]: string } = {
        "key2": "value2",
        "key1": "value1",
        "key3": "value3"
    }

    for (const [key, value] of Object.entries(map1)) {
        console.log(`key=${key}, value=${value}`)
    }

    console.log("-----------map2------------")
    let map2: Record<string, string> = {
        "key2": "value2",
        "key1": "value1",
        "key3": "value3"
    }

    for (const [key, value] of Object.entries(map2)) {
        console.log(`key=${key}, value=${value}`)
    }

    console.log("-----------map3------------")
    let map3: Map<String, String> = new Map<String, String>([
        ["key2", "value2"],
        ["key1", "value1"],
        ["key3", "value3"],
    ])

    for (const [key, value] of map3.entries()) {
        console.log(`key=${key}, value=${value}`)
    }
}