<template>
  <div class="block w-full overflow-x-auto">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <div>
        <h3 class="text-xl">كل الكتب</h3>
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
        <router-link :to="{ name: 'books.create' }" class="text-sm font-medium"
          >إضافة كتاب</router-link
        >
      </div>
    </div>
    <index-table
      :columns="columns"
      :rows="books"
      @delete="deleteRow($event)"
      @edit="editRow($event)"
    ></index-table>
  </div>
</template>

<script>
import useBooks from "../../composables/books";
import { onMounted, reactive } from "vue";
import IndexTable from "../tables/IndexTable";

export default {
  components: { IndexTable },
  setup() {
    const { books, getBooks, destroyBook, editBook } = useBooks();
    const columns = reactive([
      {
        label: "العنوان",
        column: "title",
      },
      {
        label: "المؤلف",
        column: "author",
      },
      {
        label: "الفئة",
        column: "category",
      },
    ]);

    onMounted(() => {
      getBooks();
    });

    const deleteRow = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyBook(id);
      await getBooks();
    };
    const editRow = (id) => {
      editBook(id);
    };

    return {
      books,
      deleteRow,
      editRow,
      columns,
    };
  },
};
</script>
