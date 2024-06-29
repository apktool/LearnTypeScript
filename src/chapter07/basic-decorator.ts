/**
 * 不带参数的装饰器
 * @param params
 */

function log(params: any) {
    console.log("hello world")
}

@log
export class HttpClient {
    public run(): void {
        console.log("I am running")
    }
}


