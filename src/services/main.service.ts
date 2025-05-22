import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: (status: number) => {
        return status === 200 || status === 204
    }
})

export class MainService {
    static async useAxios(
        path: string,
        method: 'get' | 'post' | 'put' | 'delete' = 'get',
        body: any = {}
    ) {
        return await client.request({
            url: path,
            method: method,
            data: body
        })
    }

    static updatedAt(obj: any) {
        return new Date(obj.updatedAt ? obj.updatedAt : obj.createdAt).toLocaleString('sr-RS')
    }
}