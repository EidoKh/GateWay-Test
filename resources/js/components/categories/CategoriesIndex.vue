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

    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="
              px-4
              bg-gray-100
              dark:bg-gray-600
              text-gray-500
              dark:text-gray-100
              align-middle
              border border-solid border-gray-200
              dark:border-gray-500
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-right
              min-w-140-px
            "
          >
            ت
          </th>
          <th
            class="
              px-4
              bg-gray-100
              dark:bg-gray-600
              text-gray-500
              dark:text-gray-100
              align-middle
              border border-solid border-gray-200
              dark:border-gray-500
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-right
            "
          >
            الفئة
          </th>
          <th
            class="
              px-4
              bg-gray-100
              dark:bg-gray-600
              text-gray-500
              dark:text-gray-100
              align-middle
              border border-solid border-gray-200
              dark:border-gray-500
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-right
            "
          >
            عمليات
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="category in categories" :key="category.id">
          <tr class="text-gray-700 dark:text-gray-100">
            <td
              class="
                border-t-0
                px-4
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-right
              "
            >
              {{ category.id }}
            </td>
            <th
              class="
                border-t-0
                px-4
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-right
              "
            >
              {{ category.category_name }}
            </th>
            <th
              class="
                border-t-0
                px-4
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-right
                flex
              "
            >
              <span class="cursor-pointer" @click="deleteCategory(category.id)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  /></svg
              ></span>
              <router-link
                :to="{ name: 'categories.edit', params: { id: category.id } }"
              >
                <span class="cursor-pointer"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    /></svg></span
              ></router-link>
            </th>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import useCategories from "../../composables/categories";
import { onMounted } from "vue";

export default {
  setup() {
    const { categories, getCategories, destroyCategory } = useCategories();

    onMounted(getCategories);

    const deleteCategory = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyCategory(id);
      await getCategories();
    };

    return {
      categories,
      deleteCategory,
    };
  },
};
</script>
