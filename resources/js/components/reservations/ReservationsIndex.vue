<template>
  <div
    class="
      p-3
      shadow-sm
      rounded-sm
      relative
      flex flex-col
      min-w-0
      mb-4
      lg:mb-0
      break-words
      bg-gray-200
      dark:bg-gray-800
      w-full
      rounded-b
    "
  >
    <div
      class="
        flex
        items-center
        space-x-2
        font-semibold
        leading-8
        text-blue-700
        dark:text-gray-100
      "
    >
      <span clas="text-green-500">
        <svg
          class="h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </span>
      <span class="tracking-wide">الغرامات</span>
    </div>
    {{ reservations }}
    <div class="text-gray-700 dark:text-gray-100">
      <index-table
        :columns="columns"
        :rows="reservations"
        @delete="deleteRow($event)"
        @edit="editRow($event)"
        @view="viewRow($event)"
      ></index-table>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import IndexTable from "../tables/IndexTable";
import { onMounted } from "@vue/runtime-core";
import useReservations from "../../composables/reservations";

export default {
  components: {
    IndexTable,
  },
  setup() {
    const { getReservations, destroyReservation, reservations } =
      useReservations();
    const columns = reactive([
      {
        label: "الكتاب",
        column: "book",
      },
      {
        label: "المستخدم",
        column: "user",
      },
      {
        label: "الحالة",
        column: "status",
      },
    ]);
    onMounted(async () => {
      getReservations();
    });

    const editRow = (id) => {};
    const viewRow = (id) => {};
    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyReservation(id);
      await getReservations();
    };
    return {
      columns,
      editRow,
      viewRow,
      deleteRow,
      reservations,
    };
  },
};
</script>