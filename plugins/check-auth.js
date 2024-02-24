export default defineNuxtPlugin(async (app) => {
    const {fetchUser} = useAuthStore();
    const {removeToken}= useTokenStore()
    const {error} = await fetchUser();
    if(error?.value){
        removeToken()
    }
})
