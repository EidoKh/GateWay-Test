import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useReservations() {
    const reservations = ref([]);
    const reservation = ref([]);
    const router = useRouter();

    const getReservations = async () => {
        let response = await axios.get("/api/reservations/");
        reservations.value = response.data.data;
    };

    const getReservation = async (id) => {
        let response = await axios.get("/api/reservations/" + id);
        reservation.value = response.data.data;
    };

    const destroyReservation = async (id) => {
        await axios.delete("/api/reservations/" + id);
    };

    return {
        reservations,
        reservation,
        getReservations,
        getReservation,
        destroyReservation,
    };
}
