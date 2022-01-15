<template>
  <div class="block w-full overflow-x-auto">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <div>
        <h3 class="text-xl">كل الفئات</h3>
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
          :to="{ name: 'categories.create' }"
          class="text-sm font-medium"
          >إضافة فئة</router-link
        >
      </div>
    </div>
    <index-table
      :columns="columns"
      :rows="categories"
      @delete="deleteRow($event)"
      @edit="editRow($event)"
    ></index-table>
  </div>
</template>
<script>
import useCategories from "../../composables/categories";
import { onMounted, reactive } from "vue";
import IndexTable from "../tables/IndexTable";

export default {
  components: { IndexTable },
  setup() {
    const { categories, getCategories, destroyCategory, editCategory } =
      useCategories();
    const columns = reactive([
      {
        label: "الفئة",
        column: "category_name",
      },
    ]);
    onMounted(getCategories);

    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyCategory(id);
      await getCategories();
    };
    const editRow = (id) => {
      editCategory(id);
    };

    return {
      categories,
      deleteRow,
      columns,
      editRow,
    };
  },
};
</script>
