import { defineStore } from 'pinia'
import useApi from "~/composables/useApi.js";
import {useTokenStore} from "~/stores/useTokenStore.js";

export const useAuthStore = defineStore('auth', ()=>{
    const {sendRequest, loading, error} = useApi();
    const {setToken, getToken, setIsLogin} = useTokenStore();

    const user = ref( null)
    const isLoggedIn = computed(() => !! user.value)

    async function fetchUser(){
        const data = await sendRequest("user")
        user.value = data?.value
    }

    async function login(credential){
        // await sendRequest("/sanctum/csrf-cookie")
        const login = await sendRequest({
            url:"login",
            method:"POST",
            data: credential,
        })

        if (login?.status === 200){
            setToken(login.data?.token)
            await fetchUser();
        }

        return login;
    }

    async function signup(signupData){
        const signUp = await sendRequest("/register",{
            method:"POST",
            body: signupData,
            headers:{
                'Content-Type': 'multipart/form-data',
            }
        })
        console.log(signUp)
        return signUp;
    }

    async function logout(){
        await sendRequest("/logout",{method:"POST"})
        user.value = null;
        navigateTo('/')
    }

    return {user, login, signup, isLoggedIn, fetchUser, logout, error, loading}
})