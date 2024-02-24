import {defineStore} from 'pinia'
import {useApiFetch} from "~/composables/useApiFetch";
import {useTokenStore} from "~/stores/useTokenStore";
import Toast from "vue-toastification";
import { useToast } from 'vue-toastification'
export default defineStore('auth', ()=>{
    const toast = useToast()

    async function fetchUser(){
        return useApiFetch("user", {
            method: "GET"
        });
    }


    async function login(credential: any){
        return useApiFetch("login", {
            method: "POST",
            body: credential,
            lazy: true
        });
    }

    async function signup(signupData: any){
        return useApiFetch("/register", {
            method: "POST",
            body: signupData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    }

    async function logout(){
        const {data, error} = await useApiFetch("logout",{method:"POST"})
        if(data.value) {
            useTokenStore().removeToken()
            toast.success(data?.value?.message)
            navigateTo('/login')
        }
        if(error.value) {
            toast.error(error?.value?.data?.message)
        }
    }

    return { login,signup, logout, fetchUser}

})