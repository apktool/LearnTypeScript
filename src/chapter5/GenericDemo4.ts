class MySqlDb<T> {
    add(info: T): boolean {
        console.log(info)
        return true
    }
}

class User {
    private _username: string
    private _password: string

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}


let user = new User()
user.username = "username"
user.password = "password"

let mySqlDb1: MySqlDb<User> = new MySqlDb<User>()
mySqlDb1.add(user)

console.log("----------------------------------")

class Article {
    private _title: string
    private _desc: string
    private _status: number

    constructor(params: { title: string, desc: string, status?: number }) {
        this._title = params.title;
        this._desc = params.desc;
        this._status = params.status;
    }
}

let article = new Article({
    title: "book",
    desc: "desc"
})

let mySqlDb2: MySqlDb<Article> = new MySqlDb<Article>()
mySqlDb2.add(article)
