import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useUsers() {
    const users = ref([]);
    const user = ref(null);
    const router = useRouter();
    const getUsers = async () => {
        try {
            let response = await axios.get("/api/users");
            users.value = response.data.data;
        } catch (error) {}
    };
    const getUser = async () => {
        try {
            let response = await axios.get("/api/users");
            users.value = response.data.data;
        } catch (error) {}
    };
    const destroyUser = async (id) => {
        await axios.delete("/api/users/" + id);
        getUsers();
    };

    return {
        users,
        getUsers,
        destroyUser,
        getUser,
    };
}
