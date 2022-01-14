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
        rows="6"
        v-model="author.about_author"
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
// import { onMounted } from "@vue/runtime-core";
// import useAuthors from "../../composables/authors";
// export default {
//   props: {
//     id,
//   },
//   setup(props) {
//     const { getAuthor, author } = useAuthors();

//     onMounted(() => {
//       getAuthor(props.id);
//     });
//     const saveAuthor = () => {};

//     return { author };
//   },
// };
</script>
