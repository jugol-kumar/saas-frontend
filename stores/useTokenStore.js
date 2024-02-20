import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
    state: () => {
        return {
            token: null,
            isLogin: false,
        }
    },

    actions:{
        setToken(token){
            this.token = token
            this.isLogin = true;
        }
    },
    getters:{
        getToken(){
            return this.token
        },
        getIsLogin(){
            return this.isLogin
        }
    },

    persist: true,
})