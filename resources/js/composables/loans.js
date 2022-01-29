import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useConfig from "../config";

export default function useLoans() {
    const loans = ref([]);
    const loan = ref([]);
    const router = useRouter();
    const { getHeader } = useConfig();

    const getLoans = async (id) => {
        let response = await axios.get("/api/user-loans/" + id, {
            headers: getHeader(),
        });
        loans.value = response.data.data;
    };

    const getLoan = async (id) => {
        let response = await axios.get("/api/loans/" + id, {
            headers: getHeader(),
        });
        loan.value = response.data.data;
    };

    const destroyLoan = async (id) => {
        await axios.delete("/api/loans/" + id, {
            headers: getHeader(),
        });
    };

    return {
        loans,
        loan,
        getLoans,
        getLoan,
        destroyLoan,
    };
}
