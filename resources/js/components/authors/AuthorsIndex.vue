<template>
  <div class="block w-full overflow-x-auto">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <div>
        <h3 class="text-xl">كل الفئات</h3>
      </div>
      <div
        class="
          px-4
          py-2
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          cursor-pointer
          rounded-lg
        "
      >
        <router-link
          :to="{ name: 'authors.create' }"
          class="text-sm font-medium"
          >إضافة فئة</router-link
        >
      </div>
    </div>

    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="
              px-4
              bg-gray-100
              dark:bg-gray-600
              text-gray-500
              dark:text-gray-100
              align-middle
              border border-solid border-gray-200
              dark:border-gray-500
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-right
              min-w-140-px
            "
          >
            ت
          </th>
          <th
            class="
              px-4
              bg-gray-100
              dark:bg-gray-600
              text-gray-500
              dark:text-gray-100
              align-middle
              border border-solid border-gray-200
              dark:border-gray-500
              py-3
              text-xs
              uppercase
              border-l-0 border-r-0
              whitespace-nowrap
              font-semibold
              text-right
            "
          >
            الفئة
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <template v-for="category in categories" :key="category.id"> -->
        <tr class="text-gray-700 dark:text-gray-100">
          <td
            class="
              border-t-0
              px-4
              align-middle
              border-l-0 border-r-0
              text-xs
              whitespace-nowrap
              p-4
              text-right
            "
          >
            1
          </td>
          <th
            class="
              border-t-0
              px-4
              align-middle
              border-l-0 border-r-0
              text-xs
              whitespace-nowrap
              p-4
              text-right
            "
          >
            باولو كويلو
          </th>
        </tr>
        <!-- </template> -->
      </tbody>
    </table>
  </div>
</template>