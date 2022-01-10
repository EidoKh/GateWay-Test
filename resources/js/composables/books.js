import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useBooks() {
    const books = ref([]);
    const book = ref([]);
    const router = useRouter();
    const errors = ref("");

    const getBooks = async () => {
        let response = await axios.get("/api/books");
        books.value = response.data.data;
    };

    const getBook = async (id) => {
        let response = await axios.get("/api/books/" + id);
        book.value = response.data.data;
    };
    let fd = new FormData();
    const storeBook = async (data) => {
        fd.append("image", data.file);
        fd.append("title", data.form.title);
        fd.append("description", data.form.description);
        fd.append("category_id", data.form.category_id);
        fd.append("author_id", data.form.author_id);
        fd.append("language", data.form.language);
        fd.append("pages", data.form.pages);
        fd.append("number_of_copies", data.form.number_of_copies);
        fd.append("publication_year", data.form.publication_year);
        fd.append("book_image", data.form.book_image);
        errors.value = "";
        try {
            await axios.post("/api/books", fd);
            await router.push({ name: "books.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateBook = async (id) => {
        errors.value = "";
        try {
            await axios.put("/api/books/" + id, book.value);
            await router.push({ name: "books.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyBook = async (id) => {
        await axios.delete("/api/books/" + id);
    };

    return {
        books,
        book,
        errors,
        getBooks,
        getBook,
        storeBook,
        updateBook,
        destroyBook,
    };
}
