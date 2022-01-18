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
    {{ fines }}
    <div class="text-gray-700 dark:text-gray-100">
      <index-table
        :columns="columns"
        :rows="fines"
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
import useFines from "../../composables/fines";

export default {
  components: {
    IndexTable,
  },
  props: {
    fines: Array,
    user_id: String,
  },
  setup(props) {
    const { getFines, destroyFine } = useFines();
    const columns = reactive([
      {
        label: "تأريخ القرض",
        column: "loan_date",
      },
      {
        label: "قيمة الغرامة",
        column: "fine_amount",
      },
      {
        label: "تأريخ الغرامة",
        column: "fine_date",
      },
    ]);
    onMounted(async () => {});

    const editRow = (id) => {};
    const viewRow = (id) => {};
    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyFine(id);
      await getFines(props.user_id);
    };
    return {
      columns,
      editRow,
      viewRow,
      deleteRow,
    };
  },
};
</script>