/**
 * 不带参数的装饰器
 * @param params
 */

function log(params: any) {
    console.log("hello world")
}

@log
class HttpClient {
    public run(): void {
        console.log("I am running")
    }
}

let client: HttpClient = new HttpClient()
client.run()
