<template>
  <div class="mt-8 mx-4">
    <div
      class="
        bg-blue-50
        dark:bg-gray-800 dark:text-gray-50
        border border-blue-500
        dark:border-gray-500
        rounded-lg
        shadow-md
      "
    >
      <h4 class="text-lg font-bold bg-gray-400 rounded-t-lg p-4">
        {{ pr_name }}
      </h4>
      <div class="p-4">
        <h4 class="text-lg font-semibold mt-3">Ingredients:</h4>
        <ul>
          <li
            class="mt-2"
            v-for="ingredient in ingredients.split('\\')"
            :key="ingredient"
          >
            <span class="flex">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="transform transition-transform duration-500 ease-in-out"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path></svg
              ><span class="inline-flex pl-2">{{ ingredient }}</span></span
            >
          </li>
        </ul>
        <h4 class="text-lg font-semibold mt-3">Steps:</h4>
        <ol>
          <li class="mt-2" v-for="(step, i) in steps.split('\\')" :key="step">
            <span class="inline-flex pl-2">{{
              step != "" ? i + 1 + ": " + step : ""
            }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pr_name: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    steps: {
      type: String,
    },
  },
};
</script>