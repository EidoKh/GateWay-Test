import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useUsers() {
    const users = ref([]);
    const user = ref([]);
    const router = useRouter();
    const errors = ref("");

    const getUsers = async () => {
        let response = await axios.get("/api/users");
        users.value = response.data.data;
    };

    const getUser = async (id) => {
        let response = await axios.get("/api/users/" + id);
        user.value = response.data.data;
    };
    const storeUser = async (data) => {
        let fd = new FormData();
        fd.append("image", data.file);
        fd.append("name", data.form.name);
        fd.append("email", data.form.email);
        fd.append("password", data.form.password);
        fd.append("phone", data.form.phone);
        fd.append("status", data.form.status);
        fd.append("location", data.form.location);
        fd.append("user_type", data.form.user_type);
        fd.append("user_image", data.form.user_image);

        errors.value = "";
        try {
            await axios.post("/api/users", fd);
            await router.push({ name: "users.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateUser = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("new_image", data.file);
        fd.append("user_image", data.form.user_image);
        fd.append("title", data.form.title);
        fd.append("description", data.form.description);
        fd.append("category_id", data.form.category_id);
        fd.append("author_id", data.form.author_id);
        fd.append("language", data.form.language);
        fd.append("pages", data.form.pages);
        fd.append("number_of_copies", data.form.number_of_copies);
        fd.append("publication_year", data.form.publication_year);

        errors.value = "";
        try {
            await axios.post("/api/users/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await router.push({ name: "users.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyUser = async (id) => {
        await axios.delete("/api/users/" + id);
    };
    const editUser = (id) => {
        router.push({ name: "users.edit", params: { id: id } });
    };

    return {
        users,
        user,
        errors,
        getUsers,
        getUser,
        storeUser,
        updateUser,
        destroyUser,
        editUser,
    };
}
