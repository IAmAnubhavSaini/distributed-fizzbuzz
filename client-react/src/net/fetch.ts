import {range} from "../utils/range";
import {BUZZ_URL, FIZZ_URL} from "./config";

const options: RequestInit = {
    method: "GET", mode: "cors"
};

export async function fetchFizzBuzz(start: number = 1, count: number = 100): Promise<string[]> {
    const data: { i: number, value: string }[] = [];
    for await (const i of range(start)) {
        /* This is a hack to fix how range returns data
            Without this, the whole data mapping goes off.
         */
        if (i === start) continue;

        const requests = [fetch(FIZZ_URL + i, options), fetch(BUZZ_URL + i, options)];
        for await (const x of requests) {
            const value = x.status === 200 ? (await x.text()).toString() : "";
            data.push({i, value});
        }
    }

    return data
        .reduce((acc: string[], curr, _, arr) => {
            const {i} = curr;
            const maybeResponse = arr.filter(item => item.i === i);
            acc[i] = maybeResponse.map(({value}) => value).join("") || (i).toString();
            return acc;
        }, [])
        .filter(_ => !!_);
}
