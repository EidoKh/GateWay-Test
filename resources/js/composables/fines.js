import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useFines() {
    const fines = ref([]);
    const fine = ref([]);
    const router = useRouter();

    const getFines = async (id) => {
        let response = await axios.get("/api/user-fines/" + id);
        fines.value = response.data.data;
    };

    const getFine = async (id) => {
        let response = await axios.get("/api/fines/" + id);
        fine.value = response.data.data;
    };

    const destroyFine = async (id) => {
        await axios.delete("/api/fines/" + id);
    };

    return {
        fines,
        fine,
        getFines,
        getFine,
        destroyFine,
    };
}
