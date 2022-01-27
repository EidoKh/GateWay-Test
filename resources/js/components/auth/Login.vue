<template>
  <div
    class="
      h-screen
      bg-gradient-to-br
      from-blue-600
      to-indigo-600
      flex
      justify-center
      items-center
      w-full
    "
  >
    <form @submit.prevent="saveForm()">
      {{ form }}
      <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div class="space-y-4">
          <h1 class="text-center text-2xl font-semibold text-gray-600">
            Register
          </h1>
          <div>
            <label for="email" class="block mb-1 text-gray-600 font-semibold"
              >Email</label
            >
            <input
              type="email"
              class="
                bg-indigo-50
                px-4
                py-2
                outline-none
                rounded-md
                w-full
                text-black
              "
              v-model="form.email"
            />
          </div>
          <div>
            <label for="email" class="block mb-1 text-gray-600 font-semibold"
              >Password</label
            >
            <input
              type="password"
              autocomplete="new-password"
              class="
                bg-indigo-50
                px-4
                py-2
                outline-none
                rounded-md
                w-full
                text-black
              "
              v-model="form.password"
            />
          </div>
        </div>
        <button
          type="submit"
          class="
            mt-4
            w-full
            bg-gradient-to-tr
            from-blue-600
            to-indigo-600
            text-indigo-100
            py-2
            rounded-md
            text-lg
            tracking-wide
          "
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import axios from "axios";
export default {
  setup() {
    let form = reactive({
      email: "",
      password: "",
    });
    let errors = ref([]);
    const saveForm = () => {
      axios
        .post("api/login", form)
        .then(() => {
          console.log("saved");
        })
        .catch((error) => {
          errors.value = error.response.data.errors;
        });
    };

    return { form, saveForm, errors };
  },
};
</script>
