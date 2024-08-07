/**
 * 静态属性/静态方法
 */

export class Person {
    private readonly _name: string

    private static _sex: string = "male"

    constructor(name: string) {
        this._name = name;
    }

    work(): void {
        console.log(`${this._name} is working`)
    }

    static play(): void {
        console.log(`${this._sex} is welcomed`)
    }
}


