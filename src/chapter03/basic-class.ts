/**
 * Javascript
 * ES6之前
 * - 原型链实现继承
 * - 对象冒充实现继承
 * - 原型连 + 对象冒充 实现继承
 * ES6
 * - class, extend
 */

export class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

export class Son extends Person {
    private readonly _score: number

    constructor(name: string, age: number, score: number) {
        super(name, age);
        this._score = score;
    }


    get score(): number {
        return this._score;
    }
}

/**
 * 修饰符
 *   名称       | 说明
 * :-----------|:----------
 *   public    | 在类里面、子类、类外面都可以访问
 *   protected | 在类里面、子类里面可以访问、在类外面不能访问
 *   private   | 在类里面可以访问，子类里面和类外面都不能访问
 */
