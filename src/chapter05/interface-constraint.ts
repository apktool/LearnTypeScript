export interface NameType {
    firstName: string
    secondName: string
}

/**
 * 借助 接口 限定函数参数类型
 */
export function setName(name: NameType): void {
    console.log(name.firstName + ":" + name.secondName)
}

/**
 * 借助 接口 限定函数返回值类型
 */
export function getName(): NameType {
    return {firstName: "li", secondName: "apktool"}
}

export interface CourseType {
    (name: string, score: number): string
}

/**
 * 借助 接口 限定函数参数类型
 */
export function setCourse(func: CourseType): string {
    return func("li", 20)
}

/**
 * 借助 接口 限定函数返回值类型
 */
export function getCourse(): CourseType {
    const func = (name: string, score: number): string => {
        return `${name}: ${score}`
    }

    return func
}