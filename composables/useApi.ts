import axios from 'axios';
import {useTokenStore} from "~/stores/useTokenStore.js";

export default function useApi() {
    const {getToken, token}= useTokenStore();
    const axiosInstance = axios.create({
        baseURL: useRuntimeConfig().public.baseUrl,
        withCredentials: true,
        xsrfHeaderName: "X-XSRF-TOKEN",
        headers:{
            Accept : "application/json",
            Authorization: `Bearer ${token}`
        }
    });



    const loading = ref(false);
    const error = ref(null);
    const sendRequest = async (config: any) => {
        loading.value = true;
        try {
            return await axiosInstance(config);
        } catch (err) {
            // @ts-ignore
            error.value = err?.response;
        } finally {
            loading.value = false;
        }
    };
    return {
        loading,
        error,
        sendRequest,
    };
}