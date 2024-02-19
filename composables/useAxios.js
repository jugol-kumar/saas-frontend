import axios from 'axios'

export const useAxios = () => {
    const storeUser = useStoreUser()

    return axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${storeUser.token}`
        }
    })
}