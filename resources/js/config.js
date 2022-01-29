import { ref } from "vue";

export default function useConfig() {
    const APP_URL = "http://127.0.0.1:8000/";
    const tokenDate = window.localStorage.getItem("token");
    const getHeader = () => {
        const headers = {
            Authorization: `Bearer ${tokenDate}`,
            "Content-Type": "multipart/form-data",
        };
        return headers;
    };
    return { APP_URL, getHeader };
}
