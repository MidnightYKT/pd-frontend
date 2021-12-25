import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/rugrotpt7xd35'
})

export const API = {
    post: (payload : any) => {
        return instance.post('', payload).then(response => {
            return response.data
        })
    }
}