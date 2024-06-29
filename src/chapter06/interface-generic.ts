export interface ConfigFn1 {
    <T>(value: T): T
}

let getData1: ConfigFn1 = function <T>(value: T): T {
    return value
}

export {getData1}


export interface ConfigFn2<T> {
    (value: T): T
}

export function getData2<T>(value: T): T {
    return value
}