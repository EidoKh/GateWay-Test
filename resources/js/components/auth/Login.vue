<template>
  <button class="bg-blue-900 text-white p-4" @click="logoutUser">Logout</button>
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
      {{ authUser }}
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
import { getHeader } from "../../config";
import axios from "axios";
export default {
  setup() {
    let form = reactive({
      email: "",
      password: "",
    });
    let errors = ref([]);
    let access_token = ref(null);
    const authUser = reactive({});
    const loginUser = () => {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        console.log(response);
        axios.post("api/login", form).then((response) => {
          console.log(response.data);
          authUser.access_token = response.data.access_token;
          window.localStorage.setItem("token", response.data.access_token);
          getSecrets();
        });
      });

      // axios
      //   .post("api/login", form)
      //   .then((res) => {
      //     console.log(res.data);
      //     authUser.access_token = res.data.access_token;
      //     authUser.refresh_token = res.data.refresh_token;
      //     window.localStorage.setItem("authUser", JSON.stringify(authUser));
      //     axios.get("api/user", { headers: getHeader() }).then((response) => {
      //       console.log("user: ", response);
      //     });
      //   })
      //   .catch((error) => {
      //     errors.value = error.response.data.errors;
      //   });
    };
    function getSecrets() {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authUser.access_token}`;
      axios.get("api/user").then((response) => {
        console.log("user: ", response.data);
      });
    }
    function logoutUser() {
      axios
        .post("api/logout")
        .then((response) => {
          localStorage.removeItem("token");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return { form, loginUser, errors, authUser, logoutUser };
  },
};
</script>
