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
      <span class="tracking-wide"> {{ user_id }}القروض</span>
    </div>
    <div class="text-gray-700 dark:text-gray-100">
      <index-table
        :columns="columns"
        :rows="loans"
        @delete="deleteRow($event)"
        @edit="editRow($event)"
        @view="viewRow($event)"
      ></index-table>

      <!-- <div class="grid md:grid-cols-2 text-sm">
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">First Name</div>
          <div class="px-4 py-2">Jane</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Last Name</div>
          <div class="px-4 py-2">Doe</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Gender</div>
          <div class="px-4 py-2">Female</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Contact No.</div>
          <div class="px-4 py-2">+11 998001001</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Current Address</div>
          <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Permanant Address</div>
          <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Email.</div>
          <div class="px-4 py-2">
            <a class="text-blue-800" href="mailto:jane@example.com"
              >jane@example.com</a
            >
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="px-4 py-2 font-semibold">Birthday</div>
          <div class="px-4 py-2">Feb 06, 1998</div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import IndexTable from "../tables/IndexTable";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    IndexTable,
  },
  props: {
    loans: Array,
  },
  setup(props) {
    let loans_ = reactive([
      {
        id: 1,
        book: "الخيميائي",
        loan_date: "1-1-2020",
        returned_date: "8-1-2020",
      },
      {
        id: 2,
        book: "إحدى عشر دقيقة",
        loan_date: "2-2-2020",
        returned_date: "9-2-2020",
      },
    ]);
    const columns = reactive([
      {
        label: "الكتاب",
        column: "book",
      },
      {
        label: "تاريخ القرض",
        column: "loan_date",
      },
      {
        label: "موعد الدفع",
        column: "returned_date",
      },
    ]);
    onMounted(async () => {});

    const editRow = (id) => {
      console.log(id);
    };
    const viewRow = (id) => {
      console.log(id);
    };
    return {
      loans_,
      columns,
      editRow,
      viewRow,
    };
  },
};
</script>