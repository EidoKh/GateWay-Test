import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useConfig from "../config";

export default function useOrders() {
    const orders = ref([]);
    const order = ref([]);
    const router = useRouter();
    const errors = ref("");
    const { getHeader } = useConfig();

    const getOrders = async () => {
        let response = await axios.get("/api/orders", {
            headers: getHeader(),
        });
        orders.value = response.data.data;
    };

    const getOrder = async (id) => {
        let response = await axios.get("/api/orders/" + id);
        order.value = response.data.data[0];
    };
    const storeOrder = async (data) => {
        // let fd = new FormData();
        // fd.append("image", data.file);
        // fd.append("name", data.form.name);
        // fd.append("email", data.form.email);
        // fd.append("password", data.form.password);
        // fd.append("phone", data.form.phone);
        // fd.append("status", data.form.status);
        // fd.append("location", data.form.location);
        // fd.append("order_type", data.form.order_type);
        // fd.append("order_image", data.form.order_image);
        // fd.append("added_at", data.form.added_at);

        errors.value = "";
        try {
            await axios.post("/api/orders", data);
            await router.push({ name: "orders.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateOrder = async (id, data) => {
        errors.value = "";
        let header = getHeader();
        try {
            await axios.put("/api/orders/" + id, order.value);
            await router.push({ name: "orders.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyOrder = async (id) => {
        await axios.delete("/api/orders/" + id),
            {
                headers: getHeader(),
            };
    };
    const editOrder = (id) => {
        router.push({ name: "orders.edit", params: { id: id } });
    };
    const viewOrder = (id) => {
        router.push({ name: "orders.view", params: { id: id } });
    };

    return {
        orders,
        order,
        errors,
        getOrders,
        getOrder,
        storeOrder,
        updateOrder,
        destroyOrder,
        editOrder,
        viewOrder,
    };
}
