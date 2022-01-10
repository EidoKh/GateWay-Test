import axios from "axios";
import { ref } from "vue";

export default function useLookups() {
    const categories = ref("");
    const authors = ref(null);
    const getCategories = async () => {
        let response = await axios.get("/api/categories");
        categories.value = response.data.data;
    };
    const getAuthors = async () => {
        let response = await axios.get("/api/authors");
        authors.value = response.data.data;
    };

    return {
        authors,
        categories,
        getCategories,
        getAuthors,
    };
}
