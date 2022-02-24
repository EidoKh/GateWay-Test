<template>
  <div class="block w-full overflow-x-auto">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <div>
        <h3 class="text-xl">All Orders</h3>
      </div>
      <div
        class="
          px-4
          py-2
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          cursor-pointer
          rounded-lg
        "
      >
        <router-link :to="{ name: 'orders.create' }" class="text-sm font-medium"
          >Create Order</router-link
        >
      </div>
    </div>
    <index-table
      :columns="columns"
      :rows="orders"
      @delete="deleteRow($event)"
      @edit="editRow($event)"
      @view="viewRow($event)"
    ></index-table>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import useOrders from "../../composables/orders";
import IndexTable from "../tables/IndexTable";

export default {
  components: {
    IndexTable,
  },
  setup() {
    const { getOrders, orders, destroyOrder, editOrder, viewOrder } =
      useOrders();
    const columns = reactive([
      {
        label: "Client Name",
        column: "client_name",
      },
      {
        label: "Date",
        column: "date",
      },
    ]);
    onMounted(() => {
      getOrders();
    });
    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyOrder(id);
      await getOrders();
    };
    const editRow = (id) => {
      editOrder(id);
    };
    const viewRow = (id) => {
      viewOrder(id);
    };

    return {
      orders,
      columns,
      deleteRow,
      editRow,
      viewRow,
    };
  },
};
</script>