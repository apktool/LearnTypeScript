import {HttpClient} from "@/chapter07/medium-decorator";

describe("#chapter07", () => {
    it("log", () => {
        let client: HttpClient = new HttpClient()
        client.run(123)

        console.log(client.url)
    })
})