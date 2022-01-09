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

  <div class="w-100 text-right pt-6 px-6">
    <h3 class="text-xl">إضافة كتاب</h3>
  </div>
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveCategory">
    <div class="flex flex-col">
      <label for="name" class="hidden">العنوان</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="عنوان الكتاب"
        v-model="form.title"
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
    <div class="flex flex-col">
      <label for="name" class="hidden">Full Name</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="اكتب شيئا عن الكتاب"
        v-model="form.description"
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
      category_id: null,
      title: "",
      description: "",
      author_id: null,
      language: "",
      pages: null,
      number_of_copies: null,
      publication_year: null,
      book_image: "",
      book_thumbnail: "",
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
