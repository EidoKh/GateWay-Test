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
    <form @submit.prevent="loginUser()">
      <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <div class="space-y-4">
          <h1 class="text-center text-2xl font-semibold text-gray-600">
            Login
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
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import useConfig from "../../config";
import axios from "axios";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const { APP_URL, getHeader } = useConfig();
    const router = useRouter();
    let form = reactive({
      email: "",
      password: "",
    });

    let errors = ref([]);
    const authUser = reactive({});
    const loginUser = async () => {
      await axios.get("/sanctum/csrf-cookie").then((response) => {
        console.log(response);
        axios.post("api/login", form).then(async (response) => {
          authUser.access_token = response.data.access_token;
          await window.localStorage.setItem(
            "token",
            response.data.access_token
          );
          await getSecrets();
          await router.push({ name: "dashboard" });
          location.reload();
        });
      });
    };
    async function getSecrets() {
      console.log(getHeader());
      await axios
        .get("api/user", {
          headers: await getHeader(),
        })
        .then(async (response) => {
          console.log("user: ", response.data);
          await window.localStorage.setItem(
            "logged_in_user",
            JSON.stringify(response.data)
          );
        });
    }

    return { form, loginUser, errors, authUser, APP_URL };
  },
};
</script>
