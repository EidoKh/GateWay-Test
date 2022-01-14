<template>
  <div class="w-100 text-right pt-6 px-6">
    <h3 class="text-xl">إضافة كتاب</h3>
  </div>
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveAuthor()">
    <div class="flex flex-col text-right">
      <label for="title" class="">اسم المؤلف</label>
      <input
        type="text"
        name="title"
        v-model="form.author_name"
        id="title"
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
    <div class="flex flex-col text-right">
      <label for="description" class="">عن المؤلف</label>
      <textarea
        name="description"
        id="description"
        rows="6"
        v-model="form.about_author"
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
    <div class="flex w-full mt-2" v-if="imagePreview">
      <img
        :src="imagePreview"
        alt=""
        class="figure-img img-fluid rounded"
        style="max-height: 100px"
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
        @change="onFileSelected"
        type="file"
        id="book-image"
      />
      <label for="book-image" class="text-right w-100 flex"
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
import { reactive, ref } from "@vue/reactivity";
import useAuthors from "../../composables/authors";
export default {
  setup() {
    const { storeAuthor } = useAuthors();
    const form = reactive({
      author_name: "",
      about_author: "",
      author_image: "",
    });

    const saveAuthor = () => {
      storeAuthor({ form: form, file });
    };

    let file = reactive(null);
    let imagePreview = ref(null);

    function onFileSelected(event) {
      file = event.target.files[0];
      form.author_image = event.target.files[0].name;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        imagePreview.value = event.target.result;
      };
    }
    return {
      form,
      saveAuthor,
      onFileSelected,
      imagePreview,
    };
  },
};
</script>
