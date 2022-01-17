import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useLoans() {
    const loans = ref([]);
    const loan = ref([]);
    const router = useRouter();

    const getLoans = async (id) => {
        let response = await axios.get("/api/user-loans/" + id);
        console.log("lon", response.data);
        loans.value = response.data.data;
    };

    const getLoan = async (id) => {
        let response = await axios.get("/api/loans/" + id);
        loan.value = response.data.data;
    };

    const destroyLoan = async (id) => {
        await axios.delete("/api/loans/" + id);
    };

    return {
        loans,
        loan,
        getLoans,
        getLoan,
        destroyLoan,
    };
}
