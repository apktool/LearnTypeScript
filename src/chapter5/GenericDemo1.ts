function f1<T>(value: T): T {
    return value;
}

let a = f1<number>(123)
console.log(a)

let b = f1<string>("abc")
console.log(b)

