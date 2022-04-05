<template>
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveProduct">
    <div class="flex flex-col">
      <input
        type="name"
        name="name"
        id="name"
        v-model="form.name"
        placeholder="Recipe Name"
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
        "
      />
    </div>
    <div class="flex flex-col mt-2">
      <textarea
        name="ingredients"
        id="ingredients"
        v-model="form.ingredients"
        placeholder="Separate each ingredient with \ :&#10;&#10;Milk \ 2 Eggs \ 1/3 Cub Sugar"
        rows="6"
        class="
          w-full
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
        "
      />
    </div>

    <div class="flex flex-col mt-2">
      <textarea
        name="steps"
        id="steps"
        v-model="form.steps"
        placeholder="Separate each step with a \ :&#10;&#10;Preheat oven to 350°F \ &#10;Combine ingredients in pie crust \ &#10;Bake until crust is golden brown. \"
        rows="6"
        class="
          w-full
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
      Submit
    </button>
  </form>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import useProducts from "../composable/products";
export default {
  setup() {
    let form = ref({
      name: "",
      ingredients: "",
      steps: "",
    });
    const { storeProduct, getProducts } = useProducts();
    const saveProduct = async () => {
      await storeProduct({ form });
      form.value = {
        name: "",
        ingredients: "",
        steps: "",
      };
    };

    return { form, saveProduct };
  },
};
</script>