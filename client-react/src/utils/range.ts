export async function* range(start: number = 1, count: number = 100) {
    for (let i = start; i <= start + count; i++) {
        yield i;
    }
}
