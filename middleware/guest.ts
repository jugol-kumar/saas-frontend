export default defineNuxtRouteMiddleware((to, from) => {
    const {isLogin, getAuthUser}= useTokenStore();
    if (isLogin && getAuthUser.role.includes('Customer')) {
        return navigateTo('/dashboard')
    }else if(isLogin && getAuthUser.role.includes('Administrator')) {
        return navigateTo('/superadmin')
    }
})