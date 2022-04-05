<template>
  <form class="p-6 flex flex-col justify-center">
    <div class="flex flex-col">
      <label for="name" class="hidden">Full Name</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="Full Name"
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
      <label for="email" class="hidden">Email</label>

      <textarea
        name="description"
        id="description"
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
      <label for="email" class="hidden">Email</label>

      <textarea
        name="description"
        id="description"
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