<template>
  <div class="w-100 pt-6 px-6">
    <h3 class="text-xl">Order Create</h3>
  </div>
  <form class="p-6 flex flex-col justify-center" @submit.prevent="saveOrder">
    <div class="flex w-full">
      <div class="flex flex-col w-1/2">
        <label for="title" class="">Client Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="form.client_name"
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
          v-model="form.phone"
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
          v-model="form.adults"
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
          v-model="form.children"
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
          v-model="form.infants"
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
        v-model="form.city"
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
        v-model="form.notes"
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
import { onMounted, reactive, ref } from "vue";
import useOrders from "../../composables/orders";

export default {
  setup() {
    const { storeOrder } = useOrders();
    let today = ref(new Date().toISOString().slice(0, 10));
    const agent_id = localStorage.getItem("auth_id");
    const form = reactive({
      date: today.value,
      case_code: "",
      client_name: "",
      phone: "",
      adults: "",
      children: "",
      infants: "",
      city: "",
      agent_id: agent_id,
      notes: "",
    });

    const saveOrder = async () => {
      await storeOrder({ ...form });
    };

    return {
      form,
      saveOrder,
    };
  },
};
</script> 
