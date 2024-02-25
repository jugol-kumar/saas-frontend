

export default defineNuxtRouteMiddleware((to, from) => {
    const {isLogin}= useTokenStore();
    if (isLogin) return navigateTo('/dashboard')
})