<template>
  <!-- create popup -->
  <div
    v-if="isCreate"
    v-click-outside="
      () => {
        isCreate = false;
      }
    "
    class="absolute bg-gray-600 w-3/4 rounded-md z-10"
  >
    <product-create @close_this="closePopup()"></product-create>
  </div>
  <!--end of create popup -->

  <!-- edit popup -->
  <div
    v-if="isEdit"
    v-click-outside="
      () => {
        isEdit = false;
      }
    "
    class="absolute bg-gray-600 w-3/4 rounded-md z-10"
  >
    <product-edit :product="product" @close_this="closePopup()"></product-edit>
  </div>
  <!-- end of edit popup -->

  <!-- show popup -->
  <div
    v-if="isShow"
    v-click-outside="
      () => {
        isShow = false;
      }
    "
    class="absolute w-3/4 rounded-md z-10 mx-auto"
  >
    <product-show
      :ingredients="ingredients"
      :steps="steps"
      :pr_name="product.name"
    ></product-show>
  </div>
  <!-- end of show popup -->
  <div class="mt-4 mx-auto lg:w-1/2">
    <div class="flex flex-col mb-3 mx-auto lg:w-1/2">
      <input
        type="name"
        name="name"
        id="name"
        v-model="keyword"
        @input="getProducts(keyword, null)"
        placeholder="Search in Products"
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
    <div class="flex justify-between mb-2">
      <h1 class="text-xl mt-2">All Products</h1>
      <button
        type="submit"
        class="
          md:w-36
          bg-blue-600
          dark:bg-gray-100
          text-white
          dark:text-gray-800
          font-bold
          py-2
          px-6
          rounded-lg
          hover:bg-blue-500
          dark:hover:bg-gray-200
          transition
          ease-in-out
          duration-300
        "
        @click="isCreate = true"
      >
        Add Product
      </button>
    </div>
    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <tbody
            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
            <tr
              class="
                bg-gray-50
                dark:bg-gray-800
                hover:bg-gray-100
                dark:hover:bg-gray-900
                text-gray-700
                dark:text-gray-400
                cursor-pointer
              "
              v-for="product in products.data"
              :key="product.id"
            >
              <td class="px-4 py-3 text-sm flex justify-between">
                <span class="w-full" @click="showProduct(product.id)">
                  {{ product.name }}
                </span>
                <div class="flex">
                  <span class="cursor-pointer" @click="deleteRow(product.id)"
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
                      />
                    </svg>
                  </span>
                  <span class="cursor-pointer" @click="editRow(product.id)"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      /></svg
                  ></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="
          grid
          px-4
          py-1
          text-xs
          font-semibold
          tracking-wide
          text-gray-500
          uppercase
          border-t
          dark:border-gray-700
          bg-gray-50
          sm:grid-cols-9
          dark:text-gray-400 dark:bg-gray-800
        "
      >
        <span class="flex items-center col-span-3">
          Showing {{ products.from }}-{{ products.to }} of
          {{ products.total }} </span
        ><span class="col-span-2"></span
        ><!-- Pagination --><span
          class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end"
          ><nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <!-- <li>
                <button
                  class="
                    px-3
                    py-1
                    rounded-md rounded-l-lg
                    focus:outline-none focus:shadow-outline-purple
                  "
                  aria-label="Previous"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li> -->
              <li v-for="link in products.links" :key="link.label">
                <button
                  class="
                    px-3
                    py-1
                    rounded-md
                    focus:outline-none focus:shadow-outline-purple
                  "
                  :class="
                    products.current_page == link.label
                      ? 'text-white dark:text-gray-800 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md'
                      : ''
                  "
                  @click="getProducts('', link.url)"
                >
                  <span
                    :class="
                      link.url != null && products.current_page != link.label
                        ? 'text-white'
                        : ''
                    "
                  >
                    {{ link.label }}
                  </span>
                </button>
              </li>
            </ul>
          </nav></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import ProductCreate from "./ProductCreate.vue";
import ProductEdit from "./ProductEdit.vue";
import ProductShow from "./ProductShow.vue";
import useProducts from "../composable/products";
import { useSwal } from "../plugins/useSwal.js";
export default {
  components: {
    ProductCreate,
    ProductShow,
    ProductEdit,
  },
  setup() {
    let Swal = useSwal();
    let user = ref(null);
    let isCreate = ref(false);
    let isShow = ref(false);
    let isEdit = ref(false);
    let steps = ref("");
    let ingredients = ref("");
    let keyword = ref("");
    const { products, getProducts, getProduct, product, destroyProduct } =
      useProducts();
    onMounted(() => {
      getProducts(keyword.value, null);
    });
    const showProduct = async (id) => {
      await getProduct(id);
      steps.value = product.value.steps.trim();
      ingredients.value = product.value.ingredients.trim();
      isShow.value = true;
    };
    const deleteRow = async (id) => {
      Swal.fire({
        title: "Are you sure?",
        html: "You won't be able to revert this Product, ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await destroyProduct(id);
          await getProducts(keyword.value, null);
          Swal.fire("Deleted!", "Product has been deleted.", "success");
        }
      });

      // if (!window.confirm("Are you sure?")) {
      //   return;
      // }
    };
    const editRow = async (id) => {
      await getProduct(id);
      isEdit.value = true;
    };
    const closePopup = async () => {
      isEdit.value = false;
      isCreate.value = false;
      getProducts(keyword.value, null);
    };
    return {
      user,
      isCreate,
      products,
      showProduct,
      product,
      steps,
      isShow,
      ingredients,
      deleteRow,
      editRow,
      isEdit,
      closePopup,
      keyword,
      getProducts,
    };
  },
};
</script>

<style>
</style>