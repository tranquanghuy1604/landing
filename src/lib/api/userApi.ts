import axiosClient from "./axiosClient"

const userApi = {
    getAll(params : any){
        const url = '/user'
        return axiosClient.get(url,{params})
    },

    get(id:any){
        const url = '/user/${id}'
        return axiosClient.get(url)
    },

    add(data: any){
        const url = '/user'
        return axiosClient.post(url,data)
    }
}

export default userApi