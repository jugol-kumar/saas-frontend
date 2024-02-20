import axios from 'axios';

export default function useApi() {
    const config = useRuntimeConfig();
    const axiosInstance = axios.create({
        baseURL: config.public.baseUrl,
        withCredentials: true,
        xsrfHeaderName: "X-XSRF-TOKEN",
        headers:{
            Accept : "application/json"
        }
    });



    const loading = ref(false);
    const error = ref(null);
    const sendRequest = async (config) => {
        loading.value = true;
        try {
            return await axiosInstance(config);
        } catch (err) {
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
