import axios from "axios";
import { ref } from "vue";

export default function useAuthors() {
    const authors = ref([]);
    const storeAuthor = (data) => {
        let fd = new FormData();
        fd.append("author_name", data.form.author_name);
        fd.append("about_author", data.form.about_author);
        fd.append("image", data.file);
        try {
            axios.post("/api/authors", fd);
        } catch (error) {}
    };

    return {
        authors,
        storeAuthor,
    };
}
