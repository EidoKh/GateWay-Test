import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useConfig from "../config";

export default function useFines() {
    const fines = ref([]);
    const fine = ref([]);
    const router = useRouter();
    const { getHeader } = useConfig();

    const getFines = async (id) => {
        let response = await axios.get("/api/user-fines/" + id, {
            headers: getHeader(),
        });
        fines.value = response.data.data;
    };

    const getFine = async (id) => {
        let response = await axios.get("/api/fines/" + id, {
            headers: getHeader(),
        });
        fine.value = response.data.data;
    };

    const destroyFine = async (id) => {
        await axios.delete("/api/fines/" + id, {
            headers: getHeader(),
        });
    };

    return {
        fines,
        fine,
        getFines,
        getFine,
        destroyFine,
    };
}
