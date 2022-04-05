import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useConfig from "../config";

export default function useProducts() {
    const products = ref([]);
    const product = ref([]);
    const router = useRouter();
    const errors = ref("");
    const { getHeader } = useConfig();

    const getProducts = async () => {
        let response = await axios.get("/api/products");
        products.value = response.data;
    };

    const getProduct = async (id) => {
        let response = await axios.get("/api/products/" + id);
        product.value = response.data.data[0];
    };
    const storeProduct = async (data) => {
        errors.value = "";
        try {
            await axios.post("/api/products", data.form.value);
            await getProducts();
            // await router.push({ name: "dashboard" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateProduct = async (id, data) => {
        errors.value = "";
        let header = getHeader();
        try {
            await axios.put("/api/products/" + id, product.value);
            await router.push({ name: "products.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyProduct = async (id) => {
        await axios.delete("/api/products/" + id),
            {
                headers: getHeader(),
            };
    };
    const editProduct = (id) => {
        router.push({ name: "products.edit", params: { id: id } });
    };
    const viewProduct = (id) => {
        router.push({ name: "products.view", params: { id: id } });
    };

    return {
        products,
        product,
        errors,
        getProducts,
        getProduct,
        storeProduct,
        updateProduct,
        destroyProduct,
        editProduct,
        viewProduct,
    };
}
