export class ClassDemo<T> {
    private list: T[] = []

    add(value: T): void {
        this.list.push(value)
    }

    min(): T {
        let minNum = this.list[0]
        this.list.reduce((a, b) => {
            return minNum = a > b ? b : a
        })

        return minNum
    }
}

