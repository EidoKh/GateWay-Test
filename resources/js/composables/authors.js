import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useAuthors() {
    const authors = ref([]);
    const author = ref([]);
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
    const getAuthor = async (id) => {
        try {
            let response = await axios.get("/api/authors/" + id);
            author.value = response.data.data;
        } catch (error) {}
    };
    const destroyAuthor = async (id) => {
        await axios.delete("/api/authors/" + id);
        getAuthors();
    };
    const editAuthor = (id) => {
        router.push({ name: "authors.edit", params: { id: id } });
    };
    const updateAuthor = async (id, data) => {
        let fd = new FormData();
        fd.append("_method", "patch");
        fd.append("new_image", data.file);
        fd.append("author_image", data.form.author_image);
        fd.append("author_name", data.form.author_name);
        fd.append("author_about", data.form.author_about);

        let errors = "";
        try {
            await axios.post("/api/authors/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await router.push({ name: "authors.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    return {
        authors,
        storeAuthor,
        getAuthors,
        destroyAuthor,
        getAuthor,
        editAuthor,
        author,
        updateAuthor,
    };
}
