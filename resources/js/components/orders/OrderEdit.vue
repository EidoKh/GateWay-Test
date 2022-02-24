<template>
  <div class="w-100 pt-6 px-6">
    <h3 class="text-xl">Order Create</h3>
  </div>
  {{ order }}
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveOrder">
    <div class="flex w-full">
      <div class="flex flex-col w-1/2">
        <label for="title" class="">Client Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="order.client_name"
          class="
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
      <div class="flex flex-col w-1/2">
        <label for="phone" class="">Phone</label>
        <input
          lang="en"
          type="tel"
          name="phone"
          id="phone"
          v-model="order.phone"
          class="
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
    </div>
    <div class="flex w-full mt-4">
      <div class="flex flex-col w-1/3">
        <label for="adults" class="">Adults</label>
        <input
          type="number"
          name="adults"
          id="adults"
          v-model="order.adults"
          class="
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
      <div class="flex flex-col w-1/3">
        <label for="children" class="">Children</label>
        <input
          type="number"
          name="children"
          id="children"
          v-model="order.children"
          class="
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
      <div class="flex flex-col w-1/3">
        <label for="adults" class="">Infants</label>
        <input
          type="number"
          name="infants"
          id="infants"
          v-model="order.infants"
          class="
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
    </div>

    <div class="flex flex-col w-1/2 mt-4">
      <label for="title" class="">City</label>
      <input
        type="text"
        name="city"
        id="city"
        v-model="order.city"
        class="
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

    <div class="flex flex-col w-full mt-4">
      <label for="title" class="">Notes</label>
      <textarea
        type="text"
        name="notes"
        id="notes"
        v-model="order.notes"
        class="
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
      Save
    </button>
  </form>
</template>
<script>
import useOrders from "../../composables/orders";
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
    const { errors, order, getOrder, updateOrder } = useOrders();

    onMounted(getOrder(props.id));

    const saveOrder = async () => {
      await updateOrder(props.id);
    };

    return {
      errors,
      order,
      saveOrder,
    };
  },
};
</script>
