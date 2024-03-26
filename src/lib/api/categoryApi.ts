import axiosClient from "./axiosClient"

const categoryApi = {
    getAll(params : any){
        const url = '/category'
        return axiosClient.get(url,{params})
    },

    get(id:any){
        const url = '/category/${id}'
        return axiosClient.get(url)
    },

    add(data: any){
        const url = '/category'
        return axiosClient.post(url,data)
    }
}
 

export default categoryApi