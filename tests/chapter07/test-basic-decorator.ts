import {HttpClient} from "@/chapter07/basic-decorator";

describe("#chapter07", () => {
    it("log", () => {
        let client: HttpClient = new HttpClient()
        client.run()
    })
})