/**
 * 带参数的装饰器
 * @param params
 */

function logClass(params: any) {
    return function (target: any) {
        console.log(params)
        console.log(target)
    }
}

function logProperty(params: any) {
    return function (target: any, attr: any) {
        target[attr] = params
        console.log(target)
        console.log(attr)
    }
}

function logMethod(params: any) {
    return function (target: any, methodName: any, desc: any) {

        let onMethod = desc.value

        desc.value = function (...args: any[]) {
            args = args.map((value) => {
                return String(value)
            })

            console.log(args)

            onMethod.apply(this, args)

            console.log(params)
        }
    }
}

function logParams(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log(target.value)
        console.log("--------------")
    }
}

@logClass("Hello")
class HttpClient {

    @logProperty("http://www.baidu.com")
    private _url: string

    @logMethod("I will Fly")
    public run(@logParams() params: any): void {
        console.log("I am running")
    }


    get url(): string {
        return this._url;
    }
}

let client: HttpClient = new HttpClient()
client.run(123)

console.log(client.url)

/**
 * 装饰器的执行顺序
 *
 * 1. 属性装饰器
 * 2. 方法装饰器
 * 3. 方法参数饰器
 * 4. 类装饰器
 *
 * 如果有多个同样的装饰器，会从后向前执行
 */
