import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCategories() {
    const categories = ref([]);
    const category = ref([]);
    const router = useRouter();
    const errors = ref("");

    const getCategories = async () => {
        let response = await axios.get("/api/categories");
        categories.value = response.data.data;
    };

    const getCategory = async (id) => {
        let response = await axios.get("/api/categories/" + id);
        category.value = response.data.data;
    };

    let fd = new FormData();
    const storeCategory = async (data) => {
        fd.append("image", data.file);
        fd.append("category_name", data.form.category_name);
        fd.append("category_image", data.form.category_image);
        console.log(data);
        errors.value = "";
        try {
            await axios.post("/api/categories", fd);
            await router.push({ name: "categories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };
    const editCategory = (id) => {
        router.push({ name: "categories.edit", params: { id: id } });
    };

    const updateCategory = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("new_image", data.file);
        fd.append("category_image", data.form.category_image);
        fd.append("category_name", data.form.category_name);
        errors.value = "";
        try {
            await axios.post("/api/categories/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await router.push({ name: "categories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyCategory = async (id) => {
        await axios.delete("/api/categories/" + id);
    };

    return {
        categories,
        category,
        errors,
        getCategories,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory,
        editCategory,
    };
}
