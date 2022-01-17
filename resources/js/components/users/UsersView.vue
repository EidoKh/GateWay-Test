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
          <!-- Profile tab -->
          <!-- About Section -->
          <div
            class="
              p-3
              shadow-sm
              rounded-sm
              relative
              flex flex-col
              min-w-0
              mb-4
              lg:mb-0
              break-words
              bg-gray-200
              dark:bg-gray-800
              w-full
            "
          >
            <div
              class="
                flex
                items-center
                space-x-2
                font-semibold
                leading-8
                text-blue-700
                dark:text-gray-100
              "
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700 dark:text-gray-100">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">Jane</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">Doe</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">Female</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+11 998001001</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com"
                      >jane@example.com</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button
              class="
                block
                w-full
                text-blue-800 text-sm
                font-semibold
                rounded-lg
                hover:bg-gray-100
                focus:outline-none focus:shadow-outline focus:bg-gray-100
                hover:shadow-xs
                p-3
                my-4
              "
            >
              Show Full Information
            </button>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-gray-200 dark:bg-gray-800 p-3 shadow-sm rounded-sm">
            <div class="grid grid-cols-2">
              <div>
                <div
                  class="
                    flex
                    items-center
                    space-x-2
                    font-semibold
                    text-gray-700
                    dark:text-gray-100
                    leading-8
                    mb-3
                  "
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Experience</span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-700 dark:text-gray-100 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-700 dark:text-gray-100 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-700 dark:text-gray-100 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-700 dark:text-gray-100 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div
                  class="
                    flex
                    items-center
                    space-x-2
                    font-semibold
                    text-gray-700
                    dark:text-gray-100
                    leading-8
                    mb-3
                  "
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Education</span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-teal-600">Masters Degree in Oxford</div>
                    <div class="text-gray-700 dark:text-gray-100 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                    <div class="text-gray-700 dark:text-gray-100 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End of Experience and education grid -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
  {{ user }}
</template>
<script>
import useUsers from "../../composables/users";
import useLookups from "../../composables/lookups";
import { onMounted, reactive, ref } from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { user, getUser } = useUsers();
    const { URL } = useLookups();

    onMounted(() => {
      getUser(props.id);
    });
    return {
      user,
      URL,
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