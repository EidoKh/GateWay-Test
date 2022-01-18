<template>
  <!-- component -->

  <div class="bg-transparent">
    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div
            class="bg-gray-200 dark:bg-gray-800 p-3 border-t-4 border-green-400"
          >
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                :src="URL + 'images/users_images/' + user.user_image"
                alt=""
              />
            </div>
            <h1
              class="
                text-gray-700
                dark:text-gray-100
                font-bold
                text-xl
                leading-8
                my-1
              "
            >
              {{ user.name }}
            </h1>
            <ul class="list-inside space-y-2">
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span> {{ user.location }}</span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span> {{ user.email }}</span>
              </li>
              <li class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span lang="en" dir="ltr"> {{ user.phone }}</span>
              </li>
            </ul>
            <ul
              class="
                bg-white
                dark:bg-gray-600
                text-gray-600
                hover:text-gray-700 hover:shadow
                py-2
                px-3
                mt-3
                divide-y
                rounded
                shadow-sm
              "
            >
              <li class="flex items-center py-3">
                <span class="dark:text-gray-100 hover:text-gray-600"
                  >الحالة</span
                >
                <span class="mr-auto">
                  <span
                    v-if="user.status == 'a'"
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >نشط</span
                  >
                  <span
                    v-else
                    class="bg-red-500 py-1 px-2 rounded text-white text-sm"
                    >غير نشط</span
                  >
                </span>
              </li>
              <li
                class="
                  flex
                  items-center
                  py-3
                  dark:text-gray-100
                  hover:text-gray-600
                "
              >
                <span>عضو منذ</span>
                <span class="mr-auto">{{ user.added_at }}</span>
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- component -->
          <div style="border-bottom: 2px solid #eaeaea">
            <ul class="flex cursor-pointer">
              <li
                class="py-2 px-6 rounded-t-lg text-black"
                :class="activeTab == 'fines' ? 'bg-white' : 'bg-gray-200'"
                @click="activeTab = 'fines'"
              >
                الغرامات
              </li>
              <li
                class="py-2 px-6 rounded-t-lg text-gray-500"
                :class="
                  activeTab == 'fine_payment' ? 'bg-white' : 'bg-gray-200'
                "
                @click="activeTab = 'fine_payment'"
              >
                دفع الغرامات
              </li>
              <li
                :class="activeTab == 'loans' ? 'bg-white' : 'bg-gray-200'"
                @click="activeTab = 'loans'"
                class="py-2 px-6 rounded-t-lg text-gray-500"
              >
                قروض
              </li>
            </ul>
          </div>
          <fines
            :user_id="id"
            :fines="fines"
            v-show="activeTab == 'fines'"
          ></fines>
          <loans :loans="loans" v-show="activeTab == 'loans'"></loans>
          <fine-payment v-show="activeTab == 'fine_payment'"></fine-payment>
        </div>
      </div>
    </div>
  </div>
  {{ fines }}
</template>
<script>
import useUsers from "../../composables/users";
import useLookups from "../../composables/lookups";
import useLoans from "../../composables/loans";
import useFines from "../../composables/fines";
import Fines from "../fines/Fines.vue";
import FinePayment from "../fines/FinePayment.vue";
import Loans from "../loans/Loans.vue";
import { onMounted, reactive, ref } from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  components: {
    FinePayment,
    Fines,
    Loans,
  },

  setup(props) {
    const { user, getUser } = useUsers();
    const { getLoans, loans } = useLoans();
    const { getFines, fines } = useFines();
    const { URL } = useLookups();
    let activeTab = ref("fines");

    onMounted(async () => {
      await getUser(props.id);
      await getLoans(props.id);
      await getFines(props.id);
    });
    return {
      user,
      URL,
      activeTab,
      loans,
      fines,
    };
  },
};
</script>
  <style>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
</style>