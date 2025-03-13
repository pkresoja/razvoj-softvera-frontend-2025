import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:44000/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: (status: number) => {
        return status === 200 || status === 204
    }
})

export class MainService {
    static async useAxios(path: string, method: string = 'get', body: any = {}) {
        return await client.request({
            url: path,
            method: method,
            data: body
        })
    }
}