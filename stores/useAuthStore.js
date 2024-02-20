import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', ()=>{
    const {sendRequest, loading, error} = useAxios()

    const user = ref( null)
    const isLoggedIn = computed(() => !! user.value)

    async function fetchUser(){
        const data = await sendRequest("user")
        user.value = data.value
    }

    async function login(credential){
        await sendRequest("/sanctum/csrf-cookie")
        const login = await sendRequest("/login",{
            method:"POST",
            body: credential,
            lazy:true
        })
        await fetchUser();
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

    return {user, login, signup, isLoggedIn, fetchUser, logout}
})