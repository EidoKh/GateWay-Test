import axios from "axios";
import { ref } from "vue";
import useConfig from "../config";

export default function useLookups() {
    const URL = "http://127.0.0.1:8000/";
    const categories = ref("");
    const authors = ref(null);
    const { getHeader } = useConfig();
    const getCategories = async () => {
        let response = await axios.get("/api/categories", {
            headers: getHeader(),
        });
        categories.value = response.data.data;
    };
    const getAuthors = async () => {
        let response = await axios.get("/api/authors", {
            headers: getHeader(),
        });
        authors.value = response.data.data;
    };

    return {
        authors,
        categories,
        getCategories,
        getAuthors,
        URL,
    };
}
