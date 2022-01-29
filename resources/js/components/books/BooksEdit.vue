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
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveBook">
    <div class="flex flex-col text-right">
      <label for="title" class="">العنوان</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="عنوان الكتاب"
        v-model="book.title"
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
      <label for="description" class="">الوصف</label>
      <textarea
        name="description"
        id="description"
        placeholder="اكتب شيئا عن الكتاب"
        v-model="book.description"
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

    <div class="md:flex w-100 text-right">
      <div class="md:w-1/2 w-full">
        <label for="category" class="">الفئة</label>
        <select
          name="category"
          id="category"
          v-model="book.category_id"
          class="
            mt-2
            py-3
            w-full
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
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.category_name }}
          </option>
        </select>
      </div>
      <div class="md:w-1/2 w-full">
        <label for="author" class="">المؤلف</label>
        <select
          name="author"
          id="author"
          v-model="book.author_id"
          class="
            mt-2
            w-full
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
        >
          <option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="md:flex w-100 text-right">
      <div class="md:w-1/2 w-full">
        <label for="language" class="">اللغة</label>
        <select
          name="language"
          id="language"
          v-model="book.language"
          class="
            mt-2
            py-3
            w-full
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
        >
          <option value="arabic">العربية</option>
          <option value="english">الانكليزية</option>
          <option value="kurdish">الكوردية</option>
        </select>
      </div>
      <div class="md:w-1/2 w-full">
        <label for="pages" class="">عدد الصفحات</label>
        <input
          type="number"
          name="pages"
          id="pages"
          v-model="book.pages"
          class="
            mt-2
            w-full
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
    </div>
    <div class="md:flex w-100 text-right">
      <div class="md:w-1/2 w-full">
        <label for="publication_year" class="">سنة النشر</label>
        <input
          pattern="^(19|20)\d{2}$"
          type="number"
          name="publication_year"
          id="publication_year"
          v-model="book.publication_year"
          class="
            mt-2
            w-full
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
      <div class="md:w-1/2 w-full">
        <label for="number_of_copies" class="">النسخ المتوفرة</label>
        <input
          type="number"
          name="number_of_copies"
          id="number_of_copies"
          v-model="book.number_of_copies"
          class="
            mt-2
            w-full
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
    </div>
    <div
      class="flex w-full justify-end mt-2"
      v-if="book.book_image != undefined"
    >
      <img
        :src="
          imagePreview != null
            ? imagePreview
            : APP_URL + 'images/books_images/' + book.book_image
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
</template>


<script>
import useBooks from "../../composables/books";
import useLookups from "../../composables/lookups";
import useConfig from "../../config";
import { onMounted, reactive, ref } from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { errors, book, getBook, updateBook } = useBooks();
    const { getCategories, categories, getAuthors, authors } = useLookups();
    const { APP_URL } = useConfig()();

    onMounted(() => {
      getBook(props.id);
      getCategories();
      getAuthors();
    });

    const saveBook = async () => {
      await updateBook(props.id, { form: book.value, file });
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

    return {
      errors,
      book,
      saveBook,
      categories,
      authors,
      APP_URL,
      onFileSelected,
      imagePreview,
    };
  },
};
</script>
