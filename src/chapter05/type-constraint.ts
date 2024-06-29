export type NameType = {
    firstName: string
    secondName: string
}

/**
 * 借助 type 限定函数参数类型
 */
export function setName(name: NameType): void {
    console.log(name.firstName + ":" + name.secondName)
}

/**
 * 借助 type 限定函数返回值类型
 */
export function getName(): NameType {
    return {firstName: "li", secondName: "apktool"}
}