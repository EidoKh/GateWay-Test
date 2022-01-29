import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useConfig from "../config";

export default function useReservations() {
    const reservations = ref([]);
    const reservation = ref([]);
    const router = useRouter();
    const { getHeader } = useConfig();

    const getReservations = async () => {
        let response = await axios.get("/api/reservations/", {
            headers: getHeader(),
        });
        reservations.value = response.data.data;
    };

    const getReservation = async (id) => {
        let response = await axios.get("/api/reservations/" + id, {
            headers: getHeader(),
        });
        reservation.value = response.data.data;
    };

    const destroyReservation = async (id) => {
        await axios.delete("/api/reservations/" + id, {
            headers: getHeader(),
        });
    };

    return {
        reservations,
        reservation,
        getReservations,
        getReservation,
        destroyReservation,
    };
}
