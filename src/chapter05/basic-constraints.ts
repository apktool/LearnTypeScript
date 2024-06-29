/**
 * 借助 具体类型 限定函数参数类型
 */
export function setName1(firstName: string, secondName: string): void {
    console.log(firstName + ":" + secondName)
}

/**
 * 借助 匿名对象 限定函数参数类型
 */
export function setName2(name: { firstName: string, secondName: string }): void {
    console.log(name.firstName + ":" + name.secondName)
}