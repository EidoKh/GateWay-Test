<template>
  <div class="block w-full overflow-x-auto">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <div>
        <h3 class="text-xl">جميع المؤلفين</h3>
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
        <router-link
          :to="{ name: 'authors.create' }"
          class="text-sm font-medium"
          >إضافة مؤلف</router-link
        >
      </div>
    </div>
    <index-table
      :columns="columns"
      :rows="authors"
      @delete="deleteRow($event)"
      @edit="editRow($event)"
    ></index-table>
  </div>
</template>
<script>
import { onMounted, reactive } from "@vue/runtime-core";
import useAuthors from "../../composables/authors";
import IndexTable from "../tables/IndexTable";
export default {
  components: { IndexTable },
  setup() {
    const { authors, getAuthors, destroyAuthor, editAuthor } = useAuthors();
    const columns = reactive([
      {
        label: "الأسم",
        column: "name",
      },
    ]);
    onMounted(() => {
      getAuthors();
    });

    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyAuthor(id);
      await getAuthors();
    };
    const editRow = (id) => {
      editAuthor(id);
    };

    return {
      authors,
      columns,
      deleteRow,
      editRow,
    };
  },
};
</script>