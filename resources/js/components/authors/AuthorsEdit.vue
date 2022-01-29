<template>
  <div class="w-100 text-right pt-6 px-6">
    <h3 class="text-xl">تعديل كتاب</h3>
  </div>
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveAuthor()">
    <div class="flex flex-col text-right">
      <label for="title" class="">اسم المؤلف</label>
      <input
        type="text"
        name="title"
        v-model="author.author_name"
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
        v-model="author.author_about"
        rows="6"
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
    <div
      class="flex w-full justify-end mt-2"
      v-if="author.author_image != undefined"
    >
      <img
        :src="
          imagePreview != null
            ? imagePreview
            : APP_URL + 'images/authors_images/' + author.author_image
        "
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
      <label for="book-image" class="text-right w-100 flex justify-end"
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

  {{ author }}
</template>
<script>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import useAuthors from "../../composables/authors";
import useConfig from "../../config";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { getAuthor, author, updateAuthor } = useAuthors();
    const { APP_URL } = useConfig();

    onMounted(async () => {
      await getAuthor(props.id);
      author.value.new_image = null;
    });
    const saveAuthor = () => {
      updateAuthor(props.id, { form: author.value, file });
    };
    let file = reactive(null);
    let imagePreview = ref(null);

    function onFileSelected(event) {
      file = event.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        imagePreview.value = event.target.result;
      };
    }

    return { author, onFileSelected, imagePreview, saveAuthor, APP_URL };
  },
};
</script>
