<template>
  <div v-if="errors">
    <div
      v-for="(v, k) in errors"
      :key="k"
      class="
        bg-red-500
        text-white
        rounded
        font-bold
        mb-4
        shadow-lg
        py-2
        px-4
        pr-0
      "
    >
      <p v-for="error in v" :key="error" class="text-sm">
        {{ error }}
      </p>
    </div>
  </div>

  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveCategory">
    <div class="flex flex-col">
      <label for="name" class="hidden">Full Name</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="اسم الفئة"
        v-model="form.category_name"
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
        "
      />
    </div>

    <div class="flex flex-col mt-2">
      <input
        class="
          w-100
          mt-2
          py-3
          px-3
          rounded-lg
          bg-white
          dark:bg-gray-800
          border border-gray-400
          dark:border-gray-700
          text-gray-800
          dark:text-gray-50
          font-semibold
          focus:border-blue-500 focus:outline-none
          text-right
          hidden
        "
        type="file"
        id="category-image"
      />
      <label for="category-image" class="text-right w-100 flex justify-end"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          /></svg
      ></label>
    </div>

    <button
      type="submit"
      class="
        md:w-32
        bg-blue-600
        dark:bg-gray-100
        text-white
        dark:text-gray-800
        font-bold
        py-3
        px-6
        rounded-lg
        mt-4
        hover:bg-blue-500
        dark:hover:bg-gray-200
        transition
        ease-in-out
        duration-300
      "
    >
      حفظ
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
import useCategories from "../../composables/categories";

export default {
  setup() {
    const form = reactive({
      category_name: "",
      category_image: "",
    });

    const { errors, storeCategory } = useCategories();

    const saveCategory = async () => {
      await storeCategory({ ...form });
    };

    return {
      form,
      errors,
      saveCategory,
    };
  },
};
</script> 
