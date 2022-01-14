import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useAuthors() {
    const authors = ref([]);
    const author = ref(null);
    const router = useRouter();
    const storeAuthor = async (data) => {
        let fd = new FormData();
        fd.append("author_name", data.form.author_name);
        fd.append("about_author", data.form.about_author);
        fd.append("image", data.file);
        try {
            await axios.post("/api/authors", fd);
            await router.push({ name: "authors.index" });
        } catch (error) {}
    };
    const getAuthors = async () => {
        try {
            let response = await axios.get("/api/authors");
            authors.value = response.data.data;
        } catch (error) {}
    };
    const getAuthor = async () => {
        try {
            let response = await axios.get("/api/authors");
            authors.value = response.data.data;
        } catch (error) {}
    };
    const destroyAuthor = async (id) => {
        await axios.delete("/api/authors/" + id);
        getAuthors();
    };

    return {
        authors,
        storeAuthor,
        getAuthors,
        destroyAuthor,
        getAuthor,
    };
}
